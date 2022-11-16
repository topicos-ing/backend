const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

// Inicializa el servidor express
const app = express();
const port = process.env.PORT || 8080;

// Conexion a base de datos

app.use(express.json());

app.use(cors());

const runServer = () => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("connected to mongodb success"))
      .catch((e) => console.error(e));

    require("./route/productService");
    require("./route/authService");
  });
};

runServer();

module.exports = app;
