const mongoose = require('mongoose');

const connectDatabase = async () => {

  const conexion =  await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('MongoDb Servidor Atlas Conectado', conexion.connection.host);
};

module.exports = connectDatabase;