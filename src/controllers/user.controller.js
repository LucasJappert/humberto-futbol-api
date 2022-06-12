//TODO: Por el momento no lo utilizaríamos
const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const fileManager = require("../services/fileManager.service");


exports.login = async (req, res) => {
    const {anio, categoria} = req.params;
    let result = null;
    try{
        result = await fileManager.GetFaseGruposFile(anio, categoria);
    }catch{}

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    result = JSON.parse(result);
    ObjectResult.SendOk(res, result);
};

exports.validate = (method) => {
    switch (method) {
        case "login": {
            return [
                body("Nick", "Nick doesn't exists").exists(),
                body("Pass", "Nick doesn't exists").exists()
            ]
        }
    }
}
