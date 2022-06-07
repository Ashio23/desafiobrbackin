const TipoCuenta = require("../models/TipoCuenta");
const ErrorResponse = require("../helper/errorResponse");

exports.crearTipoCuenta = async (req, res, next) => {
  try {
    const tipoCuentaData = await TipoCuenta.create(req.body);

    res.status(200).json({
      status: 200,
      data: tipoCuentaData,
    });
  } catch (err) {
    next(
      new ErrorResponse(
        'No es posible crear el tipoCuenta' +err.mensaje,
        404
      )
    );
  }
};

exports.getTipoCuenta = async (req, res, next) => {
  try {
    const tipoCuentaLista = await TipoCuenta.find();

    res.status(200).json(tipoCuentaLista);
  } catch (err) {
    next(
      new ErrorResponse(
        'No se pudo procesar el request ' + err.mensaje,
        404
      )
    );
  }
};

exports.getTipoCuentaById = async (req, res, next) => {
  try {
    const tipoCuenta = await TipoCuenta.findById(req.params.id);
    if (!tipoCuenta) {
      return next(
        new ErrorResponse(
          "El TipoCuenta no existe en la db con este id: " + req.params.id,
          404
        )
      );
    }
    res.status(200).json(tipoCuenta);
  } catch (err) {
    next(
      new ErrorResponse(
        "El TipoCuenta no existe con este id: " + req.params.id,
        404
      )
    );
    //res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.updateTipoCuentaById = async (req, res, next) => {
  try {
    const tipoCuenta = await TipoCuenta.findByIdAndUpdate(req.params.id, req.body);

    if (!tipoCuenta) {
      return next(
        new ErrorResponse(
          "El TipoCuenta no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200, data: tipoCuenta });
  } catch (err) {
    next(
      new ErrorResponse(
        "El TipoCuenta no existe con este id: " + req.params.id,
        404
      )
    );
  }
};

exports.deleteTipoCuenta = async (req, res, next) => {
  try {
    const tipoCuenta = await TipoCuenta.findByIdAndDelete(req.params.id);

    if (!tipoCuenta) {
      return next(
        new ErrorResponse(
          "El TipoCuenta no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200 });
  } catch (err) {
    next(
      new ErrorResponse(
        "El TipoCuenta no existe con este id: " + req.params.id,
        404
      )
    );
  }
};
