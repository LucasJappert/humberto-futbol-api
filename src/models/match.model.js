const Match = function (NombreEquipo1, NombreEquipo2){
    this.Fecha = "26/03/2022 17:30";
    this.Cancha = "4";
    this.NombreEquipo1 = NombreEquipo1;
    this.GolesEquipo1 = 0;
    this.GolesPorPenalesEquipo1 = 0;
    this.NombreEquipo2 = NombreEquipo2;
    this.GolesEquipo2 = 0;
    this.GolesPorPenalesEquipo2 = 0;
    this.Estado = false;
}

const GetWinnerName = (match) => {
    if (match.GolesEquipo1 > match.GolesEquipo2)
        return match.NombreEquipo1;

    if (match.GolesEquipo1 < match.GolesEquipo2)
        return match.NombreEquipo2;

    if ((match.GolesPorPenalesEquipo1 ?? 0) > (match.GolesPorPenalesEquipo2 ?? 0))
        return match.NombreEquipo1;

    if ((match.GolesPorPenalesEquipo1 ?? 0) < (match.GolesPorPenalesEquipo2 ?? 0))
        return match.NombreEquipo2;

    return "";
}
const GetLoserName = (match) => {
    const winner = GetWinnerName(match);

    if(match.NombreEquipo1 == winner)
        return match.NombreEquipo2;

    if(match.NombreEquipo2 == winner)
        return match.NombreEquipo1;

    return "";
}
const PreSetEquipo1 = (match, nombreEquipo1) => {
    match.NombreEquipo1 = nombreEquipo1;
    match.GolesEquipo1 = 0;
    match.GolesPorPenalesEquipo1 = 0;
}
const PreSetEquipo2 = (match, nombreEquipo2) => {
    match.NombreEquipo2 = nombreEquipo2;
    match.GolesEquipo2 = 0;
    match.GolesPorPenalesEquipo2 = 0;
}

const GenerateMatch = (teamName1, teamName2, cancha = 5, fecha = "17/09/2022 12:00") => {
    let match = new Match(teamName1, teamName2);
    match.Cancha = cancha;
    match.Fecha = fecha;
    return match;
};

module.exports = { Match, GetWinnerName, GetLoserName, PreSetEquipo1, PreSetEquipo2, GenerateMatch };
