const Cliente = require("../models/Cliente");
const ErrorResponse = require("../helper/errorResponse");

exports.crearCliente = async (req, res, next) => {
  try {
    const clienteData = await Cliente.create(req.body);

    res.status(200).json({
      status: 200,
      data: clienteData,
    });
  } catch (err) {
    next(
      new ErrorResponse(
        'No es posible crear el cliente' +err.mensaje,
        404
      )
    );
  }
};

exports.getCliente = async (req, res, next) => {
  try {
    const clienteLista = await Cliente.find();

    res.status(200).json(clienteLista);
  } catch (err) {
    next(
      new ErrorResponse(
        'No se pudo procesar el request ' + err.mensaje,
        404
      )
    );
  }
};

exports.getClienteById = async (req, res, next) => {
  try {
    const cliente = await Cliente.findOne(req.params.rut);
    if (!cliente) {
      return next(
        new ErrorResponse(
          "El Cliente no existe en la db con este id: " + req.params.rut,
          404
        )
      );
    }
    res.status(200).json(cliente);
  } catch (err) {
    next(
      new ErrorResponse(
        "El Cliente no existe con este id: " + req.params.id,
        404
      )
    );
    //res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.updateClienteById = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body);

    if (!cliente) {
      return next(
        new ErrorResponse(
          "El Cliente no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200, data: cliente });
  } catch (err) {
    next(
      new ErrorResponse(
        "El Cliente no existe con este id: " + req.params.id,
        404
      )
    );
  }
};

exports.deleteCliente = async (req, res, next) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);

    if (!cliente) {
      return next(
        new ErrorResponse(
          "El Cliente no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200 });
  } catch (err) {
    next(
      new ErrorResponse(
        "El Cliente no existe con este id: " + req.params.id,
        404
      )
    );
  }
};
