const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const { crearTipoCuenta, getTipoCuenta, getTipoCuentaById, updateTipoCuentaById, deleteTipoCuenta } = require("../controllers/tipoCuenta");

ruta.route("/")
        .post(crearTipoCuenta)
        .get(getTipoCuenta)

ruta.route("/:id")
        .get(getTipoCuentaById)
        .put(updateTipoCuentaById)
        .delete(deleteTipoCuenta)

module.exports = ruta;