//TODO: Por el momento no lo utilizaríamos
module.exports = app => {
    const user = require("../controllers/user.controller");

    app.post("/api/login", user.validate("login"), user.login);
};
