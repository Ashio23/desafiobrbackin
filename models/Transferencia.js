const mongoose = require('mongoose');

const TransferenciaSchema = new mongoose.Schema({
    idCliente: String,
    nombreDestinatario: String,
    rutDestinatario: String,
    bancoDestinatario: String,
    tipocuenta: String,
    monto: Number,
    fecha: Date,  
},
{ timestamps: true }
);

module.exports = mongoose.model('Transferencia', TransferenciaSchema );