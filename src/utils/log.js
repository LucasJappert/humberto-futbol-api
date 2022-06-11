const colors = require('colors');

var Logger = require('bunyan');
const pkg = require("../../package.json");

var fs = require('fs');
var dir = './logs';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

module.exports.Bunyan = new Logger({
  name: pkg.name,
  streams: [
    // {
    //     stream: process.stdout,
    //     level: 'debug'
    // },
    {
        type: "rotating-file",
        path: 'logs/trace.log',
        level: 'trace',
        period: '1d'
    },
    {
        type: "rotating-file",
        path: 'logs/error.log',
        level: 'error',
        period: '1d'
    },
    {
        type: "rotating-file",
        path: 'logs/info.log',
        level: 'info',
        period: '1d'
    },
  ],
  serializers: {
    req: Logger.stdSerializers.req
  },
});

module.exports.Red = (...params) => {
    params.forEach(el => {
        console.log(colors.red(el));
    });
}
module.exports.Blue = (...params) => {
    params.forEach(el => {
        console.log(colors.blue(el));
    });
}
module.exports.Green = (...params) => {
    params.forEach(el => {
        console.log(colors.green(el));
    });
}
module.exports.Yellow = (...params) => {
    params.forEach(el => {
        console.log(colors.yellow(el));
    });
}
module.exports.BgGreen = (...params) => {
    params.forEach(el => {
        console.log(colors.bgGreen.black(el));
    });
}
module.exports.BgRed = (...params) => {
    params.forEach(el => {
        console.log(colors.bgRed.black(el));
    });
}
