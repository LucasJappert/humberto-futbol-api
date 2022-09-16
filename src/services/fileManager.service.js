const fs = require('fs');

module.exports.ABSOLUTE_PATH_JSONS = `${__dirname.replace("services", "")}json`;
console.log(`JSONs path --> ${this.ABSOLUTE_PATH_JSONS}`);

module.exports.GetFile = (absoluteFilePath) => {
    try {
        let result = fs.readFileSync(absoluteFilePath, { encoding: 'utf8' });
        result = JSON.parse(result);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}

module.exports.WriteFile = (absoluteFileName, json) => {
    let stringify = JSON.stringify(json);
    CheckAbsolutePathExistence(absoluteFileName);
    fs.writeFileSync(absoluteFileName, stringify, { encoding: 'utf8' });
}

const CheckAbsolutePathExistence = (absoluteFileNamePath) => {
    absoluteFileNamePath = absoluteFileNamePath.replaceAll("\\", "/");
    let folders = absoluteFileNamePath.split("/");
    folders = folders.filter(f => !f.includes("."));
    let auxPath = "";
    for (let folder of folders){
        auxPath += folder;
        !fs.existsSync(auxPath) && fs.mkdirSync(auxPath);
        auxPath += "/";
    }
}

