const FaseFinales = require("../src/services/fase-finales.services");
const TipoCopa = require("../src/utils/enums/tipo-copa.enum");

describe("--------> FASE FINALES SERVICES TESTS", () => {
    test("Should generate COPA ORO json since quarters when there are 4 zonas", () => {
        const result = FaseFinales.TryGenerateJson(FaseGrupo2022_2012_4_Zonas, 2022, 2012, TipoCopa.Oro);
        expect(result).not.toBeNull();
        expect(result.cuartos.length).toBe(4);
        expect(result.semis.length).toBe(2);
    })
    test("Should generate COPA ORO json since quarters when there are 3 zonas", () => {
        const result = FaseFinales.TryGenerateJson(FaseGrupo2022_2012_3_Zonas, 2022, 2012, TipoCopa.Oro);
        expect(result).not.toBeNull();
        expect(result.cuartos.length).toBe(4);
        expect(result.semis.length).toBe(2);
    })

    test("Should generate COPA PLATA json since quarters when there are 4 zonas", () => {
        const result = FaseFinales.TryGenerateJson(FaseGrupo2022_2012_4_Zonas, 2022, 2012, TipoCopa.Plata);
        expect(result).not.toBeNull();
        expect(result.cuartos.length).toBe(4);
        expect(result.semis.length).toBe(2);
    })
    test("Should generate COPA PLATA json since semis when there are 3 zonas", () => {
        const result = FaseFinales.TryGenerateJson(FaseGrupo2022_2012_3_Zonas, 2022, 2012, TipoCopa.Plata);
        expect(result).not.toBeNull();
        expect(result.cuartos.length).toBe(0);
        expect(result.semis.length).toBe(2);
    })
})



const FaseGrupo2022_2012 = {
    "1": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "1",
        "NombreEquipo2": "BARRIO GUEMES",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "DEP. TACURAL",
        "GolesEquipo1": "2",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "1",
        "NombreEquipo2": "DEP. TACURAL",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "2",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "3",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "2",
        "NombreEquipo2": "DEP. TACURAL",
        "GolesEquipo2": "4",
        "Estado": true
      }
    ],
    "2": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "CHICAGO JUNIORS",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "2",
        "NombreEquipo2": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": 0,
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": "2",
        "NombreEquipo2": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo2": "2",
        "Estado": true
      }
    ],
    "3": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "2",
        "NombreEquipo2": "BARRIO MORA RAFAELA",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo1": "2",
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "1",
        "NombreEquipo2": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO MORA RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": 0,
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO MORA RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo2": "2",
        "Estado": true
      }
    ]
};
const FaseGrupo2022_2012_4_Zonas = {
    "1": [
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "9 DE JULIO",
        "GolesEquipo1": "1",
        "NombreEquipo2": "BARRIO GUEMES",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "DEP. ALDAO",
        "GolesEquipo1": "0",
        "NombreEquipo2": "MORENO LEHMANN",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "9 DE JULIO",
        "GolesEquipo1": "2",
        "NombreEquipo2": "DEP. ALDAO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "3",
        "NombreEquipo2": "MORENO LEHMANN",
        "GolesEquipo2": "0",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "9 DE JULIO",
        "GolesEquipo1": 0,
        "NombreEquipo2": "MORENO LEHMANN",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "2",
        "NombreEquipo2": "DEP. ALDAO",
        "GolesEquipo2": "2",
        "Estado": true
      }
    ],
    "2": [
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "1",
        "NombreEquipo2": "CHICAGO JUNIORS",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "EUSEBIA",
        "GolesEquipo1": 0,
        "NombreEquipo2": "QUILMES",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "4",
        "NombreEquipo2": "EUSEBIA",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": "3",
        "NombreEquipo2": "QUILMES",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": 0,
        "NombreEquipo2": "QUILMES",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": "2",
        "NombreEquipo2": "EUSEBIA",
        "GolesEquipo2": "1",
        "Estado": true
      }
    ],
    "3": [
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "CICLES CLUB",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "FLORIDA CLUCELLAS",
        "GolesEquipo1": "1",
        "NombreEquipo2": "SPORTIVO NORTE AZUL",
        "GolesEquipo2": "4",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "2",
        "NombreEquipo2": "FLORIDA CLUCELLAS",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CICLES CLUB",
        "GolesEquipo1": "1",
        "NombreEquipo2": "SPORTIVO NORTE AZUL",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "2",
        "NombreEquipo2": "SPORTIVO NORTE AZUL",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CICLES CLUB",
        "GolesEquipo1": "1",
        "NombreEquipo2": "FLORIDA CLUCELLAS",
        "GolesEquipo2": 0,
        "Estado": true
      }
    ],
    "4": [
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "1",
        "NombreEquipo2": "CULTURAL LA PARA",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "INDEP. ATALIVA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "SPORTIVO NORTE BLANCO",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "3",
        "NombreEquipo2": "INDEP. ATALIVA",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CULTURAL LA PARA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "SPORTIVO NORTE BLANCO",
        "GolesEquipo2": "4",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "1",
        "NombreEquipo2": "SPORTIVO NORTE BLANCO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "",
        "Cancha": "3",
        "NombreEquipo1": "CULTURAL LA PARA",
        "GolesEquipo1": "2",
        "NombreEquipo2": "INDEP. ATALIVA",
        "GolesEquipo2": 0,
        "Estado": true
      }
    ]
};

const FaseGrupo2022_2012_3_Zonas = {
    "1": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "1",
        "NombreEquipo2": "BARRIO GUEMES",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "DEP. TACURAL",
        "GolesEquipo1": "2",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "1",
        "NombreEquipo2": "DEP. TACURAL",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "2",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ACADEMIA S.C.",
        "GolesEquipo1": "0",
        "NombreEquipo2": "PEÑAROL",
        "GolesEquipo2": "2",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO GUEMES",
        "GolesEquipo1": "4",
        "NombreEquipo2": "DEP. TACURAL",
        "GolesEquipo2": "1",
        "Estado": true
      }
    ],
    "2": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "2",
        "NombreEquipo2": "BARRIO MORA RAFAELA",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo1": "2",
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": "1",
        "NombreEquipo2": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO MORA RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ARGENTINO HUMBERTO",
        "GolesEquipo1": 0,
        "NombreEquipo2": "UNIÓN DE SUNCHALES ",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "BARRIO MORA RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "ESC. SAN JOSÉ S.C.",
        "GolesEquipo2": "2",
        "Estado": true
      }
    ],
    "3": [
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "CHICAGO JUNIORS",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "2",
        "NombreEquipo2": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo2": 0,
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": 0,
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "1",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "ATLÉTICO DE RAFAELA",
        "GolesEquipo1": "1",
        "NombreEquipo2": "VETERANITOS TOSTADO",
        "GolesEquipo2": "3",
        "Estado": true
      },
      {
        "Fecha": "17/09/2022",
        "Cancha": "3",
        "NombreEquipo1": "CHICAGO JUNIORS",
        "GolesEquipo1": "2",
        "NombreEquipo2": "ESCUELITA BARRIO ITALIA",
        "GolesEquipo2": "2",
        "Estado": true
      }
    ]
}

