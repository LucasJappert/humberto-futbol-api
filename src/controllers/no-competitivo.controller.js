const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const FileManager = require("../services/fileManager.service");
const Equipos = require("../services/equipos.service");
const { GenerateMatch } = require("../models/match.model");


exports.GetPartidos = async (req, res) => {
    const {anio, categoria} = req.params;
    let result = null;

    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/no-competitivo/${anio}-${categoria}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    ObjectResult.SendOk(res, result);
};


exports.UpdatePartidos = async (req, res) => {
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
        const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/no-competitivo/${anio}-${categoria}.json`;
        try{
            currentFile = FileManager.GetFile(originalFileName);
            //Save backup
            const absoluteFilePath = `${FileManager.ABSOLUTE_PATH_JSONS}/no-competitivo/backup/${anio}-${categoria}_${Date.now()}.json`;
            FileManager.WriteFile(absoluteFilePath, currentFile);
        }catch(error){
            console.log(error);
        }

        if(currentFile == null){
            ObjectResult.SendInternalServer(res, `No se encontró el archivo${originalFileName}`);
            return;
        }

        const { partidos } = req.body;

        FileManager.WriteFile(originalFileName, partidos);

        ObjectResult.SendOk(res, partidos);
    } catch (error) {
        console.log(error);
        ObjectResult.SendInternalServer(res, error);
    }
};

exports.CreatePartidos = async (req, res) => {
    const {anio, categoria} = req.params;

    let partidos = [];

    partidos.push(GenerateMatch("Argentino Blanco", "Barrio Guemes"));
    partidos.push(GenerateMatch("Libertad", "Argentino Celeste"));
    partidos.push(GenerateMatch("Libertad", "Barrio Guemes"));
    partidos.push(GenerateMatch("Argentino Blanco", "Libertad"));
    partidos.push(GenerateMatch("Barrio Guemes", "Argentino Celeste"));

    partidos.push(GenerateMatch("Unión Verde", "Ataliva", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("B°Moreno", "Argentino Blanco", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Sp. Norte", "Quilmes Blanco", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Unión Blanco", "B° Guemes", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Argentino Celeste", "Academia FC", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Ataliva", "Quilmes Azul", 5, "18/09/2022 14:00"));
    partidos.push(GenerateMatch("Academia FC", "Unión Verde", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Quilmes Blanco", "Argentino Celeste", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("B° Guemes", "Sp. Norte", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Argentino Blanco", "Unión Blanco", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("B°Moreno", "Quilmes Azul", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Unión Verde", "Quilmes Blanco", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Ataliva", "Argentino Celeste", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Quilmes Azul", "Academia FC", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Argentino Celeste", "B° Guemes", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Unión Blanco", "B°Moreno", 5, "18/09/2022 12:00"));
    partidos.push(GenerateMatch("Sp. Norte", "Argentino Blanco", 5, "18/09/2022 13:00"));

    const fileName = `${FileManager.ABSOLUTE_PATH_JSONS}/no-competitivo/${anio}-${categoria}.json`;
    FileManager.WriteFile(fileName, partidos);

    ObjectResult.SendOk(res, partidos);
};

exports.validate = (method) => {
    switch (method) {
        case "update": {
            return [
                body("partidos", "partidos doesn't exists").exists().isArray({ min: 6 })
            ]
        }
    }
}
