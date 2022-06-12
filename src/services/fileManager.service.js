const fs = require('fs/promises');
const absolutePath = `${process.cwd()}/src/json`;

module.exports.GetFaseGruposFile = async (año, categoria) => {
    return await fs.readFile(`${absolutePath}/fase-grupos-${año}-${categoria}.json`, { encoding: 'utf8' });
}
