const mongoose = require('mongoose');

const DestinatarioSchema = new mongoose.Schema({
    idCliente: String,
    rut: String,
    nombre: String,
    apellido: String,
    correo: String,
    telefono: Number,
    descBanco: String,
    descTipoCuenta: String,
    numeroCuenta: Number,
});

module.exports = mongoose.model('Destinatario', DestinatarioSchema );