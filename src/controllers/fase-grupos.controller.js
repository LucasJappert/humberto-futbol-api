const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const FileManager = require("../services/fileManager.service");


exports.getFaseGrupos = async (req, res) => {
    const {anio, categoria} = req.params;
    let result = null;

    //TODO: Almacenar en cache
    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/zona-${anio}-${categoria}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    result = JSON.parse(result);
    ObjectResult.SendOk(res, result);
};

exports.updateFaseGrupos = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            ObjectResult.SendBadRequest(res, {
                message: "Invalid parameters!",
                errors: errors.array()
            });
            return;
        }

        const {anio, categoria} = req.params;
        try{
            let currentFile = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/fase-grupos-${anio}-${categoria}.json`);
            //Save backup
            const absoluteFilePath = `${FileManager.ABSOLUTE_PATH_JSONS}/backup/fase-grupos-${anio}-${categoria}_${Date.now()}.json`;
            FileManager.WriteFile(absoluteFilePath, currentFile);
        }catch(error){
            console.log(error);
        }
        //Save new original
        const newFile = req.body;
        const absoluteNewFilePath = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-grupos-${anio}-${categoria}.json`;
        FileManager.WriteFile(absoluteNewFilePath, newFile);

        ObjectResult.SendOk(res, { message: "Grupo actualizado con éxito!"});
    } catch (error) {
        console.log(error);
        ObjectResult.SendInternalServer(res, error);
    }
};

exports.validate = (method) => {
    switch (method) {
        case "updateFaseGrupos": {
            return [
                body("id", "id doesn't exists").exists(),
                body("categoria", "categoria doesn't exists").exists(),
                body("arrayGrupos", "arrayGrupos doesn't exists").exists()
            ]
        }
    }
}
