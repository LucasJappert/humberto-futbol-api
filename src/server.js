const Log = require("./utils/log");
const app = require("./app/app");
const http = require("http");

const port = app.get("port");
const server = http.createServer(app);

require("./routes/fase-grupos.routes")(app);
require("./routes/user.routes")(app);
require("./routes/equipos.routes")(app);
require("./routes/info-torneo.routes")(app);

server.listen(port, async () => {
    Log.BgGreen(`Servidor corriendo en http://localhost:${port}`);
});




