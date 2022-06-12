module.exports = app => {
    const faseGrupos = require("../controllers/fase-grupos.controller");

    //Id es el año
    app.get("/api/fase-grupos/:anio/:categoria", faseGrupos.getFaseGrupos);
};
