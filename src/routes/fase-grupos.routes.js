module.exports = app => {
    const faseGrupos = require("../controllers/fase-grupos.controller");

    app.get("/api/fase-grupos/:anio/:categoria", faseGrupos.getFaseGrupos);
};
