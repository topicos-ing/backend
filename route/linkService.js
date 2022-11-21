const linkSchema = require("../models/link");
const linkTypeSchema = require("../models/linkType");
const languageSchema = require("../models/language");
const providerSchema = require("../models/provider");

const router = require("../server");

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

router.get("/linksSearch", (req, res) => {
  let { gtin, acceptLanguage, uri, linkType } = req.query || {};

  let query = {
    gtin,
    acceptLanguage,
    linkType,
    uri,
  };

  query = JSON.parse(JSON.stringify(query)); // La transformacion es necesaria para que el find agarre bien la query

  linkSchema.find(query, function (err, result) {
    if (err) {
      return res.status(500).send(err);
    } else if (result) {
      return res.status(200).send(result);
    } else {
      return linkSchema.find(
        { gtin, linkType: "gs1:defaultLink" },
        function (err, result) {
          if (err) {
            res.status(500).send(err);
          } else if (result) {
            res.status(200).send(result);
          } else {
            res.status(404).json({ message: "Link not found" });
          }
        }
      );
    }
  });
});



/*
  Endpoint para obtener redirección dado un GTIN y parámetros especificados.
*/
router.get("/links/:gtin(\\d+)", async (req, res) => {
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
      return res.status(301).redirect(result.uri);
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
router.get("/links", async (req, res) => {
  const providerID = req.query.providerID;

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
      }
    ],
    function (err, result) {
      if (err) {
        res.status(500).send(err);
      }
      else if (result.length) {
        res.status(200).json(result[0].links)
      }
      else {
        res.status(500).send(err);
      }
    }
  );
});



/*
  Endpoint para agregar un enlace.
*/
router.post("/links", async (req, res) => {
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
router.put("/links/:id", async (req, res) => {
  const { id } = req.params;

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
router.delete("/links/:id", (req, res) => {
  const { id } = req.params;
  linkSchema
    .remove({ _id: id })
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

module.exports = router;