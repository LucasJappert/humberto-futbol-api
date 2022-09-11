const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const FileManager = require("../services/fileManager.service");
const FaseFinalesServices = require("../services/fase-finales.services");
const { FaseFinal, ControlInputsDeGoles} = require("../models/fase-final.model");


exports.getFaseFinal = async (req, res) => {
    const {anio, categoria, tipoCopa} = req.params;
    console.log(req.params);
    if(!(anio && categoria && tipoCopa)){
        ObjectResult.SendBadRequest(res, {
            message: "Invalid parameters!",
            errors: errors.array()
        });
        return;
    }

    let result = null;

    const Copa = tipoCopa == "Oro" ? "CopaOro" : "CopaPlata";
    //TODO: Almacenar en cache
    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/${Copa}-${anio}-${categoria}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    ObjectResult.SendOk(res, result);
};


exports.updateFaseFinal = async (req, res) => {
    try {
        const errors = validationResult(req);
        const {anio, categoria} = req.params;
        if (!errors.isEmpty() || !(anio && categoria)) {
            ObjectResult.SendBadRequest(res, {
                message: "Invalid parameters!",
                errors: errors.array()
            });
            return;
        }
        const { data } = req.body;

        const Copa = data.tipoCopa == "Oro" ? "CopaOro" : "CopaPlata";
        /** @type {FaseFinal} */
        let currentFile = null;
        const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/${Copa}-${anio}-${categoria}.json`;
        try{
            currentFile = FileManager.GetFile(originalFileName);
            //Save backup
            const absoluteFilePath = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/backup/${Copa}-${anio}-${categoria}_${Date.now()}.json`;
            FileManager.WriteFile(absoluteFilePath, currentFile);
        }catch(error){
            console.log(error);
        }

        if(currentFile == null){
            ObjectResult.SendInternalServer(res, `No se encontró el archivo${originalFileName}`);
            return;
        }

        let newFaseFinal = new FaseFinal(categoria, anio, data.tipoCopa);
        newFaseFinal.SetMeFromData(data);
        let localFaseFinal = new FaseFinal(categoria, anio, data.tipoCopa);
        localFaseFinal.SetMeFromData(currentFile);


        if(JSON.stringify(localFaseFinal.cuartos) != JSON.stringify(newFaseFinal.cuartos)){ //Chequeo finalizacion de cuartos
            localFaseFinal.SetCuartos(newFaseFinal.cuartos);
        }
        else if(JSON.stringify(localFaseFinal.semis) != JSON.stringify(newFaseFinal.semis)){ //Chequeo finalizacion de semis
            localFaseFinal.SetSemis(newFaseFinal.semis);
        }
        else if(JSON.stringify(localFaseFinal.final) != JSON.stringify(newFaseFinal.final)){ //Chequeo finalizacion de final
            localFaseFinal.SetFinal(newFaseFinal.final);
        }

        ControlInputsDeGoles(localFaseFinal);
        FileManager.WriteFile(originalFileName, localFaseFinal);

        ObjectResult.SendOk(res, localFaseFinal);
    } catch (error) {
        console.log(error);
        ObjectResult.SendInternalServer(res, error);
    }
};

exports.validate = (method) => {
    switch (method) {
        case "update-fase-final": {
            return [
                body("data", "data doesn't exists").exists()
            ]
        }
    }
}
