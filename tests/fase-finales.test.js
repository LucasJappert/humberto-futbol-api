const FaseFinales = require("../src/services/fase-finales.services");

describe("GENERALES", () => {
    test("asdasd", () => {
        // OJO que se genera un bucle infinito cuando se corre con el watch
        FaseFinales.TryGenerateJson(FaseGrupo2022_2012, 2022, 2012);
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
}
