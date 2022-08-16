module.exports = app => {
    const InfoTorneo = require("../controllers/info-torneo.controller.js");

    app.get("/api/info-torneo/:anio/:categoria", InfoTorneo.getByCategoria);
    app.get("/api/info-torneo/create/:anio/:categoria", InfoTorneo.createZona);
};
