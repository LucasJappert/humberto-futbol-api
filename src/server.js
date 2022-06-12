const Log = require("./utils/log");
const app = require("./app/app");
const http = require("http");

const port = app.get("port");
const server = http.createServer(app);

require("./routes/fase-grupos.routes")(app);
require("./routes/user.routes")(app);

server.listen(port, async () => {

    // const CacheManager = require("./services/cacheManager");
    // (async () => {
    //     await CacheManager.InitializeCacheAsync();
    //     require("./services/socketManager")(server);
    //     NotificationsProcess.StartProcess();
    // })();

    Log.BgGreen(`Servidor corriendo en http://localhost:${port}`);
});


