const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    rut: String,
    nombre: String,
    apellido: String,
    correo: String,
    password: String,
    saldo: Number
});

module.exports = mongoose.model('Cliente', ClienteSchema );