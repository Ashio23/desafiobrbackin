const Destinatario = require("../models/Destinatario");
const ErrorResponse = require("../helper/errorResponse");

exports.crearDestinatario = async (req, res, next) => {
  try {
    const destinatarioData = await Destinatario.create(req.body);

    res.status(200).json({
      status: 200,
      data: destinatarioData,
    });
  } catch (err) {
    next(
      new ErrorResponse(
        'No es posible crear el destinatario' +err.mensaje,
        404
      )
    );
  }
};

exports.getDestinatario = async (req, res, next) => {
  try {
    const destinatarioLista = await Destinatario.find();

    res.status(200).json(destinatarioLista);
  } catch (err) {
    next(
      new ErrorResponse(
        'No se pudo procesar el request ' + err.mensaje,
        404
      )
    );
  }
};

exports.getDestinatarioById = async (req, res, next) => {
  try {
    const destinatario = await Destinatario.findById(req.params.id);
    if (!destinatario) {
      return next(
        new ErrorResponse(
          "El Destinatario no existe en la db con este id: " + req.params.id,
          404
        )
      );
    }
    res.status(200).json(destinatario);
  } catch (err) {
    next(
      new ErrorResponse(
        "El Destinatario no existe con este id: " + req.params.id,
        404
      )
    );
    //res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.updateDestinatarioById = async (req, res, next) => {
  try {
    const destinatario = await Destinatario.findByIdAndUpdate(req.params.id, req.body);

    if (!destinatario) {
      return next(
        new ErrorResponse(
          "El Destinatario no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200, data: destinatario });
  } catch (err) {
    next(
      new ErrorResponse(
        "El Destinatario no existe con este id: " + req.params.id,
        404
      )
    );
  }
};

exports.deleteDestinatario = async (req, res, next) => {
  try {
    const destinatario = await Destinatario.findByIdAndDelete(req.params.id);

    if (!destinatario) {
      return next(
        new ErrorResponse(
          "El Destinatario no existe con este id: " + req.params.id,
          404
        )
      );
    }

    res.status(200).json({ status: 200 });
  } catch (err) {
    next(
      new ErrorResponse(
        "El Destinatario no existe con este id: " + req.params.id,
        404
      )
    );
  }
};
