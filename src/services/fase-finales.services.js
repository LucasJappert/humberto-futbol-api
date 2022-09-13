const FaseFinales = () => {};
const Match = require("../models/match.model");
const InfoEquipo = require("../models/info-equipo.model");
const { FaseFinal, ControlInputsDeGoles} = require("../models/fase-final.model");
const TipoCopa = require("../utils/enums/tipo-copa.enum");

FaseFinales.TryGenerateJson = (jsonFaseZonas, anio, categoria, tipoCopa) => {
    const faseCompleted = Object.values(jsonFaseZonas).flat().find(x => x.Estado == false) == null;
    if(!faseCompleted)
        return null;

    //Ordeno posiciones de equipos por zona
    let positionsByGroups = GetPositionsByGroups(jsonFaseZonas);

    const CantidadZonasPermitidas = [3, 4];
    if(CantidadZonasPermitidas.includes(positionsByGroups.length)){
        let faseFinal = new FaseFinal(categoria, anio, tipoCopa);
        let teams = [];
        if(tipoCopa == TipoCopa.Oro)
            teams = GetEquiposCopaOro(positionsByGroups);
        if(tipoCopa == TipoCopa.Plata)
            teams = GetEquiposCopaPlata(positionsByGroups);

        faseFinal.SetMe(teams);

        ControlInputsDeGoles(faseFinal);
        return faseFinal;
    }

    return null;
}
FaseFinales.TryInitializeJson = (anio, categoria, tipoCopa, teams) => {

    const CantidadZonasPermitidas = [8, 4];
    if(CantidadZonasPermitidas.includes(teams.length)){
        let faseFinal = new FaseFinal(categoria, anio, tipoCopa);
        faseFinal.SetMe(teams);

        ControlInputsDeGoles(faseFinal);
        return faseFinal;
    }

    return null;
};

const OrdenZona = (zona1, zona2) => {
    if(zona1.Ptos == zona2.Ptos){
        if(zona1.DG == zona2.DG){
            return zona1.GF < zona2.GF ? 1 : -1;
        }
        return zona1.DG < zona2.DG ? 1 : -1;
    }
    return zona1.Ptos < zona2.Ptos ? 1 : -1;
};

const GetPositionsByGroups = (jsonFaseZonas) => {
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
    return positionsByGroups;
};
const GetEquiposCopaOro = (positionsByGroups) => {
    let teams = [];
    if(positionsByGroups.length == 4){
        teams = [
            positionsByGroups[0][0].Nombre, //1° grupo A
            positionsByGroups[1][1].Nombre, //2° grupo B
            positionsByGroups[1][0].Nombre, //1° grupo B
            positionsByGroups[0][1].Nombre, //2° grupo A
            positionsByGroups[2][0].Nombre, //1° grupo C
            positionsByGroups[3][1].Nombre, //2° grupo D
            positionsByGroups[3][0].Nombre, //1° grupo D
            positionsByGroups[2][1].Nombre  //2° grupo C
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
    return teams;
};
const GetEquiposCopaPlata = (positionsByGroups) => {
    let teams = [];
    if(positionsByGroups.length == 4){
        teams = [
            positionsByGroups[0][2].Nombre, //3° grupo A
            positionsByGroups[1][3].Nombre, //4° grupo B
            positionsByGroups[3][2].Nombre, //3° grupo D
            positionsByGroups[2][3].Nombre, //4° grupo C
            positionsByGroups[1][2].Nombre, //3° grupo B
            positionsByGroups[0][3].Nombre, //4° grupo A
            positionsByGroups[2][2].Nombre, //3° grupo C
            positionsByGroups[3][3].Nombre, //4° grupo D
        ];
    }
    if(positionsByGroups.length == 3){
        const terceros = positionsByGroups.map(x => x[2]).sort((a, b) => OrdenZona(a, b));
        teams = [
            terceros[2].Nombre, //3° tercero
            positionsByGroups[0][3].Nombre, //4° A
            positionsByGroups[1][3].Nombre, //4° B
            positionsByGroups[2][3].Nombre, //4° C
        ];
    }
    return teams;
};

module.exports = FaseFinales;
