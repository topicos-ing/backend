const productSchema = require("../models/product");
const router = require("../server");

// Servicio para listar todos los docuentos
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

// Servicio para listar todos los docuentos
router.get("/products/:gtin", (req, res) => {
  const { gtin } = req.params || {};
  productSchema
    .find({ gtin })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

// Agrega un producto/docuento
router.post("/products", (req, res) => {
  const product = productSchema(req.body);
  console.log("Recibiendo datos para insertar nuevo producto: " + product);
  product
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

// Actualiza informacion de un producto por gtin
router.put("/products/:gtin/:linkTypeOld", (req, res) => {
  const { gtin, linkTypeOld } = req.params;
  console.log("Actualizando producto con gtin:" + gtin);
  productSchema
    .updateOne({ gtin: gtin, linkType: linkTypeOld }, { $set: req.body })
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json({ message: err }));
});

// Elimina productos de acuerdo al id de mongo
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Busca por gtin y params opcionales
router.get("/products/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};
  var { language } = req.query || {};

  const languageHeader = req.headers["accept-language"]?.split(",")[0];
  // Le da prioridad a el lenguaje del navegador
  if (languageHeader) {
    language = languageHeader;
  }

  var query = {
    gtin,
    language,
    linkType: req.params.linkType || "gs1:defaultLink",
  };

  query = Object.assign({}, query, req.query);
  query = JSON.parse(JSON.stringify(query)); // La transformacion es necesaria para que el find agarre bien la query

  console.log("Query previa a ejecutar busqueda: " + JSON.stringify(query));

  productSchema.findOne(query, function (err, result) {
    if (err) {
      console.error("Error al buscar el producto con filtros. Message: " + err);
      return res.status(500).send(err);
    } else if (result) {
      console.error(
        "Resultado de busqueda por filtros: " + JSON.stringify(result)
      );
      return res.status(301).redirect(result.uri);
    } else {
      console.error(
        "La busqueda por filtros no encontro un match, buscando el producto por defecto"
      );
      return searchByDefault(gtin, res);
    }
  });
});

function searchByDefault(gtin, res) {
  productSchema.findOne(
    { gtin, linkType: "gs1:defaultLink" },
    function (err, result) {
      if (err) {
        console.error(
          "Error al buscar el producto por defecto. Message: " + err
        );
        res.status(500).send(err);
      } else if (result) {
        console.error(
          "Resultado de busqueda por defecto: " + JSON.stringify(result)
        );
        res.status(301).redirect(result.uri);
      } else {
        console.error(
          "Las busquedas no encontraron productos con el gtin ingresado"
        );
        res.status(404).json({ message: "Product Not found" });
      }
    }
  );
}

module.exports = router;
