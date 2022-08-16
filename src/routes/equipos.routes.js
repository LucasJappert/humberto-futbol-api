module.exports = app => {
    const Equipos = require("../controllers/equipos.controller");

    app.get("/api/equipos/:anio", Equipos.getAll);
};
