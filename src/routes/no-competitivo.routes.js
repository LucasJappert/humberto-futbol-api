module.exports = app => {
    const NoCompetitivoController = require("../controllers/no-competitivo.controller");

    app.get("/api/no-competitivo/:anio/:categoria", NoCompetitivoController.GetPartidos);

    app.patch("/api/no-competitivo/:anio/:categoria", NoCompetitivoController.validate("update"), NoCompetitivoController.UpdatePartidos);

    app.get("/api/no-competitivo/create/:anio/:categoria", NoCompetitivoController.CreatePartidos);
};
