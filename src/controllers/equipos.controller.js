const FileManager = require("../services/fileManager.service");
const { ObjectResult } = require('../helpers/objectResult');

exports.getAll = async (req, res) => {
    const {anio} = req.params;
    let result = null;
    result = FileManager.GetFile(`${FileManager.ABSOLUTE_PATH_JSONS}/equipos-${anio}.json`);

    if (result == null){
        ObjectResult.SendNotFound(res, { message: `Json no encontrado para el año:${anio}` });
        return;
    }

    result = JSON.parse(result);
    ObjectResult.SendOk(res, result.equipos);
};
