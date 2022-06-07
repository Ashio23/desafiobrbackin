const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const { crearCliente, getCliente, getClienteById, updateClienteById, deleteCliente } = require("../controllers/cliente");

ruta.route("/")
        .post(crearCliente)
        .get(getCliente)

ruta.route("/:id")
        .get(getClienteById)
        .put(updateClienteById)
        .delete(deleteCliente)

module.exports = ruta;
