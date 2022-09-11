module.exports = app => {
    const faseFinal = require("../controllers/fase-final.controller");

    app.get("/api/fase-final/:anio/:categoria/:tipoCopa", faseFinal.getFaseFinal);

    //app.get("/api/fase-final-copa-oro/:anio/:categoria", faseFinal.getFaseFinal);

    //app.put("/api/fase-grupos/:anio/:categoria", faseGrupos.validate("updateFaseGrupos"), faseGrupos.updateFaseGrupos);

    app.patch("/api/fase-final/:anio/:categoria", faseFinal.validate("update-fase-final"), faseFinal.updateFaseFinal);
};
