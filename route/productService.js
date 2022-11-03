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

// Busca por gtin y params opcionales
router.get("/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};
  const { linkType } = req.query || {}; // Ir agreganto todos los parametros que manejamos
  const language = req.headers["accept-language"]?.split(",")[0];

  var query = { gtin, linkType, language }

  console.log("Query previa a ejecutar busqueda: " + JSON.stringify(query)); 

  productSchema.find(query).then(docs =>
    {
      if (docs[0]) {
        console.log("Resultado de busqueda por todos los params: " + docs);
        res.status(301).redirect(docs[0].uri); // Redireccion al sitio que tiene cargado el registro
        return;
      }else {
        productSchema.find({ gtin, linkType: "gs1:defaultLink" });
        console.log("No hubo resutados redireccionando a default");
        if (docs[0]) {
          console.log("Resultado de la busqueda por default : " + docs);
          res.status(301).redirect(docs[0].uri); // Redireccion al sitio que tiene cargado el registro
          return;
        }
        res.status(404).json({ message: "Product Not found" }); 
      }
  }).catch(error => {
    console.error.bind("Error obtenido al ejecutar la busqueda: ", error);
    res.status(400).json({ message: error });
  }) 
});

module.exports = router;
