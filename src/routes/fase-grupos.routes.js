module.exports = app => {
    const faseGrupos = require("../controllers/fase-grupos.controller");

    app.get("/api/fase-grupos/:anio/:categoria", faseGrupos.getFaseGrupos);

    //app.put("/api/fase-grupos/:anio/:categoria", faseGrupos.validate("updateFaseGrupos"), faseGrupos.updateFaseGrupos);

    app.patch("/api/fase-grupos/:anio/:categoria", faseGrupos.validate("update-zona"), faseGrupos.updateZona);
};
