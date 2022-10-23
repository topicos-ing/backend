const Products = require('../models/product');
const express = require('express');
const router = express.Router(); 

// Servicio para listar todos los docuentos
router.get('/getdata',  (req, res) => {
   Products.find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Endpoint para invocar por gtin y params opcionales
router.get('/:gtin_code(\\d+)', async (req, res) => {
    var gtin_code   = req.params.gtin_code;
    console.log("Solicitud por el gtin: " + gtin_code);
  
    // Se agrega a la query de busqueda el gtin
    var query = { gtin: gtin_code};

    // console.log(JSON.stringify(req.query)); // TODO: DELETE -> TEST para ver todos los params opcionales 
    // Parametros opcionales se agarran por req.query ejemplo de manejo
    var linkTypeResult   = req.query.linkType; 
    if (linkTypeResult) {
        query.linkType =linkTypeResult;
        console.log("Viajo en el request el parametro opcional linkType con el valor: " + linkTypeResult);
    }
    //FIXME var languageResult   = req.headers['accept-language']; 
    // console.log(languageResult)

    // TODO: Delete. Para pruebas y para ver como queda la query antes del find
    console.log("Query previa a ejecutar: " + JSON.stringify(query))
    Products.find(query, function (err, docs) {
        if (err){ console.error.bind("Error obtenido al ejecutar la busqueda: ", err); }
        else{
           console.log("Resultado de busqueda find: " + docs);
            // Redireccion al sitio que tiene cargado el registro
           res.redirect(301, docs[0].uri);
        }
    });
});

module.exports = router; 