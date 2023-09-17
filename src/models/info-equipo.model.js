const InfoEquipo = function (nombre) {
    this.Nombre = nombre;
    this.PJ = 0;
    this.PG = 0;
    this.PE = 0;
    this.PP = 0;
    this.GF = 0;
    this.GC = 0;
    this.DG = 0;
    this.Ptos = 0;

    this.setData = (puntosGanados, golesAFavor, golesEnContra) => {
        if (!this.Nombre.includes("INTERZONAL")) this.PJ += 1;
        if(puntosGanados == 3)
            if (!this.Nombre.includes("INTERZONAL")) this.PG += 1;
        if(puntosGanados == 1)
            if (!this.Nombre.includes("INTERZONAL")) this.PE += 1;
        if(puntosGanados == 0)
            if (!this.Nombre.includes("INTERZONAL")) this.PP += 1;
        if (!this.Nombre.includes("INTERZONAL")) this.GF += Number(golesAFavor);
        if (!this.Nombre.includes("INTERZONAL")) this.GC += Number(golesEnContra);
        if (!this.Nombre.includes("INTERZONAL")) this.DG = this.GF - this.GC;

        if (!this.Nombre.includes("INTERZONAL")) this.Ptos += puntosGanados;
    }

    // this.setData = (puntosGanados, golesAFavor, golesEnContra) => {
    //     this.PJ += 1;
    //     if (this.Nombre.includes("INTERZONAL")) {
    //         // El equipo con "interzonal" en su nombre no suma nada
    //         return;
    //     } else {
    //         // El equipo contrario suma puntos y estadísticas
    //         if (puntosGanados === 3) {
    //             this.PG += 1;
    //             if(puntosGanados == 3)
    //                 this.PG += 1;
    //              if(puntosGanados == 1)
    //                 this.PE += 1;
    //              if(puntosGanados == 0)
    //                 this.PP += 1;
    //         }
    //         this.GF += Number(golesAFavor);
    //         this.GC += Number(golesEnContra);
    //         this.DG = this.GF - this.GC;
    //         this.Ptos += puntosGanados;
    //     }
    // }
}
module.exports = InfoEquipo;
