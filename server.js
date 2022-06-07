const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDatabase = require("./config/db");
const errorHandler = require('./middleware/error');

dotenv.config({ path: "./config/config.env" });
connectDatabase();

const libro = require("./rutas/libro");
const cliente = require("./rutas/cliente");
const destinatario = require("./rutas/destinatario");
const tipoCuenta = require("./rutas/tipoCuenta");
const transferencia = require("./rutas/transferencia");


const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/libro/", libro);
app.use("/api/cliente/", cliente);
app.use("/api/destinatario/", destinatario);
app.use("/api/tipoCuenta/", tipoCuenta);
app.use("/api/transferencia/", transferencia);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log("Servidor se ejecuta en ambiente", process.env.NODE_ENV)
);
