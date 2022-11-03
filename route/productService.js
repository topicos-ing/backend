const productSchema = require("../models/product");
const express = require("express");
const router = express.Router();

// Servicio para listar todos los docuentos
router.get("/products", (req, res) => {
  productSchema.find()
    .then(data =>  res.status(200).json(data))
    .catch(err => res.status(400).json({ message: err}));
});

// Agrega un producto/docuento
router.post('/products', (req, res) => {
  const product = productSchema(req.body);
  console.log("Recibiendo datos para insertar nuevo producto: " + product)
  product
      .save()
      .then(data => res.json(data))
      .catch(err => res.status(400).json({ message: err}));
});

// Actualiza informacion de un producto por gtin 
router.put('/products/:gtin/:linkTypeOld', (req, res) => {
    
    const { gtin , linkTypeOld } = req.params;
    console.log("Actualizando producto con gtin:" + gtin );
    productSchema
      .updateOne({ gtin: gtin, linkType: linkTypeOld }, {$set: req.body })
      .then(data => res.json(data))
      .catch(err => res.status(400).json({ message: err}));
});


// Elimina productos de acuerdo al id de mongo 
router.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

router.get("/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};
  const { linkType } = req.query || {};
  const language = req.headers["accept-language"]?.split(",")[0];

  console.log("Solicitud por el gtin: " + gtin);
  // Se agrega a la query de busqueda el gtin
  let query = { gtin, linkType, language };

  //FIXME var languageResult   = req.headers['accept-language'];
  // console.log(languageResult)

  // TODO: Delete. Para pruebas y para ver como queda la query antes del find
  console.log("Query previa a ejecutar: " + JSON.stringify(query));
  try {
    let docs = await productSchema.find(query);
    if (docs[0]) {
      // Redireccion al sitio que tiene cargado el registro
      console.log("Resultado de busqueda find: " + docs);
      res.status(301).redirect(docs[0].uri);
      return;
    }
    docs = await productSchema.find({ gtin, linkType: "gs1:defaultLink" });
    console.log("No hubo resutados redireccionando a default");
    if (docs[0]) {
      // Redireccion al sitio que tiene cargado el registro
      console.log("Resultado de busqueda default find: " + docs);
      res.status(301).redirect(docs[0].uri);
      return;
    }
    res.status(404).json({ message: "Product Not found" });
  } catch (error) {
    console.error.bind("Error obtenido al ejecutar la busqueda: ", error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
