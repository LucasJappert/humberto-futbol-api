const FileManager = require("./fileManager.service");

const Equipos = () => {};

Equipos.GetEquiposByCategoria = (año, categoria) => {

    const file = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/equipos-${año}.json`);
    const json = JSON.parse(file);


    let result = [];
    json.equipos.forEach(equipo => {
        let categoriaBuscada = equipo.categorias.find(x => x.año == categoria);
        if(categoriaBuscada != null){
            result.push({
                nombreClub: equipo.nombre,
                numeroSorteo: categoriaBuscada.numeroSorteo
            });
        }
    });

    return result;
}

module.exports = Equipos;
