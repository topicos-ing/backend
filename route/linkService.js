const linkSchema = require("../models/link");
const linkTypeSchema = require("../models/linkType");
const languageSchema = require("../models/language");
const providerSchema = require("../models/provider");
const auth = require("../models/auth");

const router = require("../server");
const { async } = require("@firebase/util");

/*
  Endpoint para obtener los tipos de enlace registrados.
*/
router.get("/linkTypes", (req, res) => {
  linkTypeSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para obtener los lenguajes registrados.
*/
router.get("/languages", (req, res) => {
  languageSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para obtener los proveedores registrados.
*/
router.get("/providers", (req, res) => {
  providerSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para obtener todos los enlaces asociados a un GTIN especificado.
*/
router.head("/01/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};

  const results = await linkSchema.find({ gtin: req.params.gtin }).exec();

  if (!results.length) {
      res.status(404).send();
      return;
  } else {
      res.status(200).setHeader('links', '[' + results.toString().replace(/\r?\n|\r/g, '') + ']').send();
  }
});


/*
  Endpoint para obtener redirección dado un GTIN y parámetros especificados.
*/
router.get("/01/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};
  var { acceptLanguage } = req.query || {};

  const languageHeader = req.headers["accept-language"]?.split(",")[0];
  // Le da prioridad a el lenguaje del navegador
  if (languageHeader) {
    acceptLanguage = languageHeader;
  }

  var query = {
    gtin,
    acceptLanguage,
    linkType: req.params.linkType || "gs1:defaultLink",
  };

  query = Object.assign({}, query, req.query);
  query = JSON.parse(JSON.stringify(query)); // La transformacion es necesaria para que el find agarre bien la query

  linkSchema.findOne(query, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    } else if (result) {
      return res.redirect(result.uri);
    } else {
      return getDefaultLink(gtin, res);
    }
  });
});

function getDefaultLink(gtin, res) {
  linkSchema.findOne(
    { gtin, linkType: "gs1:defaultLink" },
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      } else if (result) {
        res.status(301).redirect(result.uri);
      } else {
        res.status(404).json({ message: "Link not found." });
      }
    }
  );
}

/*
  Endpoint para obtener los enlaces registrados para todos los productos que le
  corresponden al proveedor especificado.
*/
router.get("/links", auth.authTokenVerify, async (req, res) => {
  const providerID = await auth.getUserUId(req);

  let { gtin } = req.query || {};

  let gtinMatch;

  if (gtin) {
    gtinMatch = {
      $match: {
        'gtin': gtin
      }
    }
  } else {
    gtinMatch = {
      $match: {
      }
    }
  }
  
  providerSchema.aggregate(
    [
      {
        $match: {
          _id: providerID
        }
      },
      {
        $lookup: {
          from: "links",
          localField: "products._id",
          foreignField: "gtin",
          as: "links"
        }
      },
      {
        $project: {
          _id: 0,
          links: 1
        }
      },
      {
        $unwind: '$links'
      },
      {
        $replaceRoot: {
          newRoot: "$links"
        }
      },
      gtinMatch
    ],
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      }
      else if (result.length) {
        res.status(200).json(result)
      }
      else {
        res.status(404).send("Product not found.");
      }
    }
  );
});



/*
  Endpoint para agregar un enlace.
*/
router.post("/links", auth.authTokenVerify, async (req, res) => {
  const providerID = await auth.getUserUId(req);

  // Verifica que el GTIN corresponde a un producto que le pertenezca al
  // proveedor que realiza la solicitud.
  const productBelongsToProvider = await isGtinOwnedByProvider(req.body.gtin, providerID)

  if (!productBelongsToProvider) {
    res.status(400).json({ message: "The product GTIN doesn't exist or isn't owned by the current provider." }).send();
    return;
  }

  // Verifica que el tipo de enlace es válido.
  const isLinkTypeValid = await checkLinkType(req.body.linkType);
  if (!isLinkTypeValid) {
    res.status(400).json({ message: "The specified link type isn't valid." }).send();
    return;
  }

  // Si se especifica una opción de idioma, verifica sea una opción válida.
  if (req.body.acceptLanguage !== undefined) {
    const isLanguageValid = await checkLanguageOpt(req.body.acceptLanguage);
    if (!isLanguageValid) {
      res.status(400).json({ message: "The specified acceptLanguage isn't valid." }).send();
      return;
    }
  }

  const link = linkSchema(req.body);

  link
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para actualizar un enlace.
*/
router.put("/links/:id", auth.authTokenVerify, async (req, res) => {
  const providerID = await auth.getUserUId(req);

  const { id } = req.params;

  /*
    Verifica si el enlace especificado por su ID corresponde o no
    al proveedor indicado.
  */
  const linkBelongsToProvider = await isLinkOwnedByProvider(id, providerID);

  if (!linkBelongsToProvider) {
    res.status(400).json({ message: "The link wasn't found or doesn't belong to the specified provider." }).send();
    return;
  }

  // Verifica que el tipo de enlace es válido.
  const isLinkTypeValid = await checkLinkType(req.body.linkType);
  if (!isLinkTypeValid) {
    res.status(400).json({ message: "The specified link type isn't valid." }).send();
    return;
  }

  // Si se especifica una opción de idioma, verifica sea una opción válida.
  if (req.body.acceptLanguage !== undefined) {
    const isLanguageValid = await checkLanguageOpt(req.body.acceptLanguage);
    if (!isLanguageValid) {
      res.status(400).json({ message: "The specified acceptLanguage isn't valid." }).send();
      return;
    }
  }

  // Intenta realizar la actualización del enlace.
  linkSchema
    .updateOne({ _id: id }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para eliminar un enlace.
*/
router.delete("/links/:id", auth.authTokenVerify, async (req, res) => {
  const providerID = await auth.getUserUId(req);

  const { id } = req.params;

  /*
    Verifica si el enlace especificado por su ID corresponde o no
    al proveedor indicado.
  */
  const linkBelongsToProvider = await isLinkOwnedByProvider(id, providerID);

  if (!linkBelongsToProvider) {
    res.status(400).json({ message: "The link wasn't found or doesn't belong to the specified provider." }).send();
    return;
  }

  linkSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/*
  Verifica si un tipo de link es válido o no.
*/
async function checkLinkType(linkType) {
  const result = await linkTypeSchema.findById(linkType).exec();
  return result !== null;
}

/*
  Verifica si la opción de idioma es válida o no.
*/
async function checkLanguageOpt(languageOpt) {
  const result = await languageSchema.findById(languageOpt).exec();
  return result !== null;
}

/*
  Verifica si el producto especificado por su GTIN corresponde o no
  al proveedor indicado.
*/
async function isGtinOwnedByProvider(gtin, providerId) {
  const result = await providerSchema.findById(providerId, 'products -_id').exec();
  const products = result['products']

  const belongsToProvider = products.some( elem => {
    if (elem['_id'] === gtin) {
      return true;
    } else {
      return false;
    }
  });

  return belongsToProvider;
}

/*
  Verifica si el enlace especificado por su ID corresponde o no
  al proveedor indicado.
*/
async function isLinkOwnedByProvider(linkId, providerId) {
  // Verifica que exista un enlace para el ID especificado.
  const result = await linkSchema.findById(linkId).exec();

  if (result === null) {
    return false;
  }

  // Verifica que el GTIN corresponde a un producto que le pertenezca al
  // proveedor que realiza la solicitud.
  const productBelongsToProvider = await isGtinOwnedByProvider(result['gtin'], providerId)

  if (productBelongsToProvider) {
    return true;
  } else {
    return false;
  }
}

module.exports = router;
