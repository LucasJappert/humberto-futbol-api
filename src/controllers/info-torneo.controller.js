const FileManager = require("../services/fileManager.service");
const { ObjectResult } = require('../helpers/objectResult');
const Equipos = require("../services/equipos.service");

exports.getByCategoria = async (req, res) => {
    const {anio, categoria} = req.params;
    let result = null;
    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/info-torneo-${categoria}-${anio}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio} y categría:${categoria}` });
        return;
    }

    result = JSON.parse(result);
    ObjectResult.SendOk(res, result);
};

exports.createZona = async (req, res) => {
    const {anio, categoria} = req.params;

    let equiposDeUnaCategoria = Equipos.GetEquiposByCategoria(anio, categoria);


    let zonas = {};
    equiposDeUnaCategoria.forEach(equipo => {
        let numeroZona = ((equipo.numeroSorteo - 1) % 3) + 1;
        if(!(numeroZona in zonas)){
            zonas[numeroZona] = [];
        }
        zonas[numeroZona].push(equipo);
    });


    let partidos = {};
    for (const [key, zona] of Object.entries(zonas)) {
        if (!(key in partidos))
            partidos[key] = [];

        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[0].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[1].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[2].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[3].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[0].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[2].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[1].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[3].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[0].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[3].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
        partidos[key].push({
            "Fecha": "",
            "Cancha": "3",
            "NombreEquipo1": zona[1].nombreClub,
            "GolesEquipo1": 0,
            "NombreEquipo2": zona[2].nombreClub,
            "GolesEquipo2": 0,
            "Estado": 0
        });
    };

    const fileName = `${FileManager.ABSOLUTE_PATH_JSONS}/zona-${anio}-${categoria}.json`;
    FileManager.WriteFile(fileName, partidos);

    ObjectResult.SendOk(res, partidos);
};
