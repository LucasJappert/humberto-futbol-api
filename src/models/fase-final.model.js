const { Match, GetWinnerName, GetLoserName, PreSetEquipo1, PreSetEquipo2 } = require("./match.model");
const FaseFinal = function (categoria, anio){
    this.anio = anio;
    this.categoria = categoria;
    this.cuartos = [];
    this.semis = [];
    this.final = {};
    this.tercero = "";
    this.SetMe = function (resultsGroups) {
        const [groupA, groupB, groupC, groupD] = [resultsGroups[0], resultsGroups[1], resultsGroups[2], resultsGroups[3]];
        this.cuartos.push(new Match(groupA[0].Nombre, groupB[1].Nombre));
        this.cuartos.push(new Match(groupD[0].Nombre, groupC[1].Nombre));
        this.cuartos.push(new Match(groupB[0].Nombre, groupA[1].Nombre));
        this.cuartos.push(new Match(groupC[0].Nombre, groupD[1].Nombre));

        this.semis.push(new Match("Ganador de A", "Ganador de B"));
        this.semis.push(new Match("Ganador de C", "Ganador de D"));

        this.final = new Match("Ganador de A", "Ganador de B");
    };
    this.SetMeFromData = function (data) {
        this.cuartos = data.cuartos;
        this.semis = data.semis;
        this.final = data.final;
    };
    this.SetCuartos = function (data) {
        this.cuartos = data;
        this.TryPreSetSemis();
    };
    this.SetSemis = function (data) {
        this.semis = data;
        this.TryPreSetFinal();
    };
    this.SetFinal = function (data) {
        this.final = data;
        this.TryPreSetTercero();
    };
    this.TryPreSetSemis = function () {
        if(this.cuartos[0].Estado == 1)
            PreSetEquipo1(this.semis[0], GetWinnerName(this.cuartos[0]));
        else
            PreSetEquipo1(this.semis[0], "Ganador de A");

        if(this.cuartos[1].Estado == 1)
            PreSetEquipo2(this.semis[0], GetWinnerName(this.cuartos[1]));
        else
            PreSetEquipo2(this.semis[0], "Ganador de B");

        if(this.cuartos[2].Estado == 1)
            PreSetEquipo1(this.semis[1], GetWinnerName(this.cuartos[2]));
        else
            PreSetEquipo1(this.semis[1], "Ganador de C");

        if(this.cuartos[3].Estado == 1)
            PreSetEquipo2(this.semis[1], GetWinnerName(this.cuartos[3]));
        else
            PreSetEquipo2(this.semis[1], "Ganador de D");

    };
    this.TryPreSetFinal = function () {
        if(this.semis[0].Estado == 1)
            PreSetEquipo1(this.final, GetWinnerName(this.semis[0]));
        else
            PreSetEquipo1(this.final, "Ganador de A");

        if(this.semis[1].Estado == 1)
            PreSetEquipo2(this.final, GetWinnerName(this.semis[1]));
        else
            PreSetEquipo2(this.final, "Ganador de B");

    };
    this.TryPreSetTercero = function () {
        if(this.final.Estado == 1){
            const finalWinnerName = GetWinnerName(this.final);
            const currentMatch = this.semis.find(x => x.NombreEquipo1 == finalWinnerName || x.NombreEquipo2 == finalWinnerName);
            this.tercero = currentMatch != null ? GetLoserName(currentMatch) : "";
        }
        else
            this.tercero = "";
    }
};

const ControlInputsDeGoles = (jsonFaseFinal) => {
    ControlPartidos(jsonFaseFinal.cuartos);
    ControlPartidos(jsonFaseFinal.semis);
};
const allowedCharNumbers = [...Array(10).keys()].map(i => i);
const ControlPartidos = (partidos) => {
    partidos.forEach(partido => {
        ControlPartido(partido);
    });
};

const ControlPartido = (partido) => {
    if(partido.GolesEquipo1 == "")
        partido.GolesEquipo1 = 0;
    if(partido.GolesEquipo2 == "")
        partido.GolesEquipo2 = 0;
    if((partido.GolesPorPenalesEquipo1 ?? "") == "")
        partido.GolesPorPenalesEquipo1 = 0;
    if((partido.GolesPorPenalesEquipo2 ?? "") == "")
        partido.GolesPorPenalesEquipo2 = 0;

    partido.GolesEquipo1 = Number(partido.GolesEquipo1.toString().split().filter(x => allowedCharNumbers.includes(Number(x))).join(""));
    partido.GolesEquipo2 = Number(partido.GolesEquipo2.toString().split().filter(x => allowedCharNumbers.includes(Number(x))).join(""));
    partido.GolesPorPenalesEquipo1 = Number(partido.GolesPorPenalesEquipo1.toString().split().filter(x => allowedCharNumbers.includes(Number(x))).join(""));
    partido.GolesPorPenalesEquipo2 = Number(partido.GolesPorPenalesEquipo2.toString().split().filter(x => allowedCharNumbers.includes(Number(x))).join(""));
};

module.exports = { FaseFinal, ControlInputsDeGoles};
