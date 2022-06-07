const Transferencia = require("../models/Transferencia");
const ErrorResponse = require("../helper/errorResponse");

exports.crearTransferencia = async (req, res, next) => {
  try {
    const transferenciaData = await Transferencia.create(req.body);

    res.status(200).json({
      status: 200,
      data: transferenciaData,
    });
  } catch (err) {
    next(
      new ErrorResponse(
        'No es posible crear la transferencia' +err.mensaje,
        404
      )
    );
  }
};

exports.getTransferencia = async (req, res, next) => {
  try {
    const transferenciaLista = await Transferencia.find();
    //filter = transferencia.idCliente = req.params;

    res.status(200).json(transferenciaLista);
  } catch (err) {
    next(
      new ErrorResponse(
        'No se pudo procesar el request ' + err.mensaje,
        404
      )
    );
  }
};

exports.getTransferenciaById = async (req, res, next) => {
  try {
    //const transferencia = await Transferencia.findById(req.params.id);
    const transferencia = await Transferencia.findById({ idCliente, id }).select({ idCliente: 1, nombreDestinatario: 1, rutDestinatario: 1, bancoDestinatario: 1, tipoCuenta: 1, monto: 1, fecha:1, _id: 0 });
    if (!transferencia) {
      return next(
        new ErrorResponse(
          "La transferencia no existe en la db con este id: " + req.params.id,
          404
        )
      );
    }
    res.status(200).json(transferencia);
  } catch (err) {
    next(
      new ErrorResponse(
        "La transferencia no existe con este id: " + req.params.id,
        404
      )
    );
    //res.status(400).json({ status: 400, mensaje: err });
  }
};


