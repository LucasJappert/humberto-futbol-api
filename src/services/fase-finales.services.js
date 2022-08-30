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
        let positions = Object.values(diccionarioPosiciones).sort((a, b) => {
            if(a.Ptos == b.Ptos){
                return a.DG < b.DG ? 1 : -1;
            }
            return a.Ptos < b.Ptos ? 1 : -1;
        });
        positionsByGroups.push(positions);
    });

    if(positionsByGroups.length == 4){
        let faseFinal = new FaseFinal(categoria, anio);
        faseFinal.SetMe(positionsByGroups);
        const originalFileName = `${FileManager.ABSOLUTE_PATH_JSONS}/fase-finales/${anio}-${categoria}.json`;
        ControlInputsDeGoles(faseFinal);
        FileManager.WriteFile(originalFileName, faseFinal);
    }
}

module.exports = FaseFinales;
