const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const { crearDestinatario, getDestinatario, getDestinatarioById, updateDestinatarioById, deleteDestinatario } = require("../controllers/destinatario");

ruta.route("/")
        .post(crearDestinatario)
        .get(getDestinatario)

ruta.route("/:id")
        .get(getDestinatarioById)
        .put(updateDestinatarioById)
        .delete(deleteDestinatario)

module.exports = ruta;