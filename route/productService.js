const linkSchema = require("../models/link");
const linkTypeSchema = require("../models/linkType");
const languageSchema = require("../models/language");
const providerSchema = require("../models/provider");
const auth = require("../models/auth");

const router = require("../server");
const firebase = null

/*
  Endpoint para obtener todos los enlaces registrados.
*/
router.get("/links", auth.authTokenVerify, (req, res) => {
    linkSchema
        .find()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json({ message: err }));
});

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

    console.log("Query previa a ejecutar busqueda: " + JSON.stringify(query));

    linkSchema.find(query, function (err, result) {
        if (err) {
            console.error("Error al buscar el producto con filtros. Message: " + err);
            return res.status(500).send(err);
        } else if (result) {
            console.error(
                "Resultado de busqueda por filtros: " + JSON.stringify(result)
            );
            return res.status(200).send(result);
        } else {
            console.error(
                "La busqueda por filtros no encontro un match, buscando el producto por defecto"
            );
            return linkSchema.find(
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
                        res.status(200).send(result);
                    } else {
                        console.error(
                            "Las busquedas no encontraron productos con el gtin ingresado"
                        );
                        res.status(404).json({ message: "Product Not found" });
                    }
                }
            );
        }
    });
});

/*
  Endpoint para agregar un enlace.
*/
router.post("/links", (req, res) => {
    const link = linkSchema(req.body);
    console.log("Recibiendo datos para insertar un nuevo enlace: " + link);
    link
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.status(400).json({ message: err }));
});

/*
  Endpoint para actualizar un enlace.
*/
router.put("/links/:id", (req, res) => {
    const { id } = req.params;
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

    console.log("Query previa a ejecutar busqueda: " + JSON.stringify(query));

    linkSchema.findOne(query, function (err, result) {
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
            return getDefaultLink(gtin, res);
        }
    });
});

function getDefaultLink(gtin, res) {
    linkSchema.findOne(
        { gtin, linkType: "gs1:defaultLink" },
        function (err, result) {
            if (err) {
                console.error(
                    "Error al buscar el enlace por defecto. Message: " + err
                );
                res.status(500).send(err);
            } else if (result) {
                console.error(
                    "Resultado de busqueda por defecto: " + JSON.stringify(result)
                );
                res.status(301).redirect(result.uri);
            } else {
                console.error(
                    "No se encontró un enlace por defecto para el GTIN especificado."
                );
                res.status(404).json({ message: "Link not found." });
            }
        }
    );
}

module.exports = router;