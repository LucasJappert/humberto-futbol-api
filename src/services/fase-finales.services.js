const FaseFinales = () => {};
const Match = require("../models/match.model");
const InfoEquipo = require("../models/info-equipo.model");
const { FaseFinal, ControlInputsDeGoles} = require("../models/fase-final.model");
const FileManager = require("../services/fileManager.service");

FaseFinales.TryGenerateJson = (jsonFaseZonas, anio, categoria) => {
    const faseCompleted = Object.values(jsonFaseZonas).flat().find(x => x.Estado == false) == null;
    if(!faseCompleted)
        return;

    //Ordeno posiciones de equipos por zona
    let positionsByGroups = [];
    Object.values(jsonFaseZonas).forEach(zona => {
        let diccionarioPosiciones = {};
        zona.forEach(partido => {
            if(!(partido.NombreEquipo1 in diccionarioPosiciones))
                diccionarioPosiciones[partido.NombreEquipo1] = new InfoEquipo(partido.NombreEquipo1);
            if(!(partido.NombreEquipo2 in diccionarioPosiciones))
                diccionarioPosiciones[partido.NombreEquipo2] = new InfoEquipo(partido.NombreEquipo2);

            if(partido.GolesEquipo1 > partido.GolesEquipo2){
                diccionarioPosiciones[partido.NombreEquipo1].setData(3, partido.GolesEquipo1, partido.GolesEquipo2);
                diccionarioPosiciones[partido.NombreEquipo2].setData(0, partido.GolesEquipo2, partido.GolesEquipo1);
            }
            if(partido.GolesEquipo1 == partido.GolesEquipo2){
                diccionarioPosiciones[partido.NombreEquipo1].setData(1, partido.GolesEquipo1, partido.GolesEquipo2);
                diccionarioPosiciones[partido.NombreEquipo2].setData(1, partido.GolesEquipo2, partido.GolesEquipo1);
            }
            if(partido.GolesEquipo1 < partido.GolesEquipo2){
                diccionarioPosiciones[partido.NombreEquipo1].setData(0, partido.GolesEquipo1, partido.GolesEquipo2);
                diccionarioPosiciones[partido.NombreEquipo2].setData(3, partido.GolesEquipo2, partido.GolesEquipo1);
            }
        });
        let positions = Object.values(diccionarioPosiciones).sort((a, b) => OrdenZona(a, b));
        positionsByGroups.push(positions);
    });

    const CantidadZonasPermitidas = [3, 4];
    if(CantidadZonasPermitidas.includes(positionsByGroups.length)){
        let faseFinal = new FaseFinal(categoria, anio);
        let teams = [];
        if(positionsByGroups.length == 4){
            teams = [
                positionsByGroups[0][0].Nombre, positionsByGroups[1][1].Nombre,
                positionsByGroups[1][0].Nombre, positionsByGroups[0][1].Nombre,
                positionsByGroups[2][0].Nombre, positionsByGroups[3][1].Nombre,
                positionsByGroups[3][0].Nombre, positionsByGroups[2][1].Nombre
            ];
        }
        if(positionsByGroups.length == 3){
            const terceros = positionsByGroups.map(x => x[2]).sort((a, b) => OrdenZona(a, b));
            teams = [
                positionsByGroups[0][0].Nombre, terceros[0].Nombre, //1A vs 1°3
                positionsByGroups[1][1].Nombre, positionsByGroups[2][1].Nombre, //2B vs 2C
                positionsByGroups[1][0].Nombre, terceros[1].Nombre, //1B vs 2°3
                positionsByGroups[2][0].Nombre, positionsByGroups[0][1].Nombre //1C vs 2A
            ];
        }

        faseFinal.SetMe(teams);

        ControlInputsDeGoles(faseFinal);

        const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/${anio}-${categoria}.json`;
        FileManager.WriteFile(originalFileName, faseFinal);
    }
}

const OrdenZona = (zona1, zona2) => {
    if(zona1.Ptos == zona2.Ptos){
        if(zona1.DG == zona2.DG){
            return zona1.GF < zona2.GF ? 1 : -1;
        }
        return zona1.DG < zona2.DG ? 1 : -1;
    }
    return zona1.Ptos < zona2.Ptos ? 1 : -1;
};

module.exports = FaseFinales;
