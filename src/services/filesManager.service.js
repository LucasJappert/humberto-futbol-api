const fs = require('fs/promises');
const absolutePath = `${process.cwd()}/src/json`;

module.exports.GetFaseGruposFile = async (año, categoria) => {
    let result = await fs.readFile(`${absolutePath}/fase-grupos-2022-2010.json`, { encoding: 'utf8' });
    return result;
}
