const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const { crearTransferencia, getTransferencia, getTransferenciaById} = require("../controllers/transferencia");

ruta.route("/")
        .post(crearTransferencia)
        .get(getTransferencia)

ruta.route("/:id")
        .get(getTransferenciaById)

module.exports = ruta;