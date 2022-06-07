const mongoose = require('mongoose');

const TipoCuentaSchema = new mongoose.Schema({
    descTipoCuenta: String
});

module.exports = mongoose.model('TipoCuenta', TipoCuentaSchema );