const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const FileManager = require("../services/fileManager.service");
const FaseFinales = require("../services/fase-finales.services");
const TipoCopa = require('../utils/enums/tipo-copa.enum');


exports.getFaseGrupos = async (req, res) => {
    const {anio, categoria} = req.params;
    let result = null;

    //TODO: Almacenar en cache
    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/zona-${anio}-${categoria}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    ObjectResult.SendOk(res, result);
};


exports.updateZona = async (req, res) => {
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
        let currentFile = null;
        const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/zona-${anio}-${categoria}.json`;
        try{
            currentFile = FileManager.GetFile(originalFileName);
            //Save backup
            const absoluteFilePath = `${FileManager.ABSOLUTE_PATH_JSONS}/backup-zonas/zona-${anio}-${categoria}_${Date.now()}.json`;
            FileManager.WriteFile(absoluteFilePath, currentFile);
        }catch(error){
            console.log(error);
        }

        if(currentFile == null){
            ObjectResult.SendInternalServer(res, `No se encontró el archivo${originalFileName}`);
            return;
        }

        const { index, zona } = req.body;

        currentFile[index] = zona;
        FileManager.WriteFile(originalFileName, currentFile);

        //Intento generar json para copa Oro y Playa
        const resultFaseFinalCopaOro = FaseFinales.TryGenerateJson(currentFile, anio, categoria, TipoCopa.Oro);
        if(resultFaseFinalCopaOro){
            const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/CopaOro-${anio}-${categoria}.json`;
            FileManager.WriteFile(originalFileName, resultFaseFinalCopaOro);
        }
        const resultFaseFinalCopaPlata = FaseFinales.TryGenerateJson(currentFile, anio, categoria, TipoCopa.Plata);
        if(resultFaseFinalCopaPlata){
            const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/CopaPlata-${anio}-${categoria}.json`;
            FileManager.WriteFile(originalFileName, resultFaseFinalCopaPlata);
        }

        ObjectResult.SendOk(res, { message: "Grupo actualizado con éxito!"});
    } catch (error) {
        console.log(error);
        ObjectResult.SendInternalServer(res, error);
    }
};

exports.validate = (method) => {
    switch (method) {
        case "update-zona": {
            return [
                body("index", "index doesn't exists").exists().isNumeric(),
                body("zona", "zona doesn't exists").exists().isArray({ min: 6, max: 6 })
            ]
        }
    }
}
