const data = require('../models/data');
const express = require('express');
const router = express.Router(); 

// Servicio para listar todos los registros de la coleccion proveedores
router.get('/getdata', (req, res) => {
    data
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Endpoint para invocar por id y gtin
router.get('/:id(\\d+)/:code(\\d+)', (req, res) => {
    var idp   = req.params.id;
    console.log("Solicitud por el id: " + idp);
    var codigo  = req.params.code;
    console.log("Solicitud por el id: " + codigo);

    // Parametros opcionales se agarran por req.query  
    var linkType   = req.query.linkType; 
    if (linkType) {
        console.log("Viajo en el request el parametro opcional linkType con el valor: " + linkType);
    }    

    var query = { id: idp};

    data.find(query, function (err, docs) {
        if (err){
            // TODO: Controlar mejor esta respuesta
            console.log(err); 
        }
        else{
            console.log("Resultado de busqueda: " + docs);
            // Redireccion al sitio que tiene cargado el registro
            res.redirect(301, docs[0].link);
        }
    });
});

module.exports = router; 