const dotenv = require('dotenv').config();
const logger = require('../middlewares/logger');
const express = require("express");
const cors = require('cors'); // Importa el middleware CORS
const app = express();
const pkg = require("../../package.json");

// Configura CORS para permitir solicitudes desde el dominio de tu frontend
const corsOptions = {
    origin: 'https://humbertito.com', // Reemplaza con la URL de tu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Usa el middleware CORS

app.set("port", process.env.PORT || 2000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger);

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');//TODO: Setear ciertos dominios para que no quede expuesta a cualquiera
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });
app.get("/", (req, res) => {
    res.status(200).json(`Hello ${process.env.NODE_ENV}! App versión: ${pkg.version}`);
});

module.exports = app;

