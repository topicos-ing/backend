const Products = require("../models/product");
const express = require("express");
const router = express.Router();

// Servicio para listar todos los docuentos
router.get("/", async (req, res) => {
  try {
    const data = await Products.find();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json({ message: e });
  }
});

// Endpoint para invocar por gtin y params opcionales
router.get("/:gtin(\\d+)", async (req, res) => {
  const { gtin } = req.params || {};
  const { linkType, language } = req.query || {};
  console.log("Solicitud por el gtin: " + gtin);
  // Se agrega a la query de busqueda el gtin
  let query = { gtin, linkType, language };

  //FIXME var languageResult   = req.headers['accept-language'];
  // console.log(languageResult)

  // TODO: Delete. Para pruebas y para ver como queda la query antes del find
  console.log("Query previa a ejecutar: " + JSON.stringify(query));
  try {
    const docs = await Products.find(query);
    if (docs[0]) {
      // Redireccion al sitio que tiene cargado el registro
      console.log("Resultado de busqueda find: " + docs);
      res.status(301).redirect(docs[0].uri);
    } else {
      res.status(404).json({ message: "Product Not found" });
    }
  } catch (error) {
    console.error.bind("Error obtenido al ejecutar la busqueda: ", error);
    res.status(400).json({ message: error });
  }
});

module.exports = router;
