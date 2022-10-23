const express = require('express');
const mongoose = require('mongoose');
const service = require('./route/dataService');
require("dotenv").config();

// Inicializa el servidor express
const app = express();
const port = process.env.PORT || 8080

// Conexion a base de datos
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("connected to mongodb success"))
        .catch((error) => console.error(error));

app.use('/', service);

app.listen(port, () => console.log(`Server listening on port ${port}`))
