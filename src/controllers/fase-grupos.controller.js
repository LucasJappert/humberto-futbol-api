const { ObjectResult } = require('../helpers/objectResult');
const { body, validationResult } = require('express-validator');
const FilesManager = require("../services/filesManager.service");


exports.getFaseGrupos = async (req, res) => {
    //TODO: Ver de borrar, ya que los parametros no deberían nunca venir nulos, ya que los agarra el ruteo antes.
    // if (req.params.año == null || req.params.categoria == null) {
    //     ObjectResult.SendBadRequest(res, { message: "Invalid parameters!"});
    //     return;
    // }
    let result = await FilesManager.GetFaseGruposFile(1, 1);
    //console.log(result);
    result = JSON.parse(result);

    if (result == null)
        ObjectResult.SendInternalServer(res, { message: "test" });
    else
        ObjectResult.SendOk(res, result);
};

// exports.validate = (method) => {
//     switch (method) {
//         case "getFaseGrupos": {
//             return [
//                 body("Nick", "Nick doesn't exists").exists(),
//             ]
//         }
//     }
// }
