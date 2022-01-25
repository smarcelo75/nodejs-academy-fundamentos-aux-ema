const argv = require('yargs')
    .option('nombre', {
        alias: 'n',
        description: 'Nombre',
        demandOption: true
    })
    .option('apellido', {
        alias: 'a',
        description: 'Apellido',
        demandOption: true
    })
    .option('edad', {
        alias: 'e',
        description: 'Edad',
        demandOption: true,
        type: 'number'
    })
    .option('delete', {
        alias: 'd',
        description: 'Elimina el registro del archivo correspondiente de acuerdo a la edad',
        demandOption: true,
        type: 'boolean',
        default: false
    })
    .check((argv) => {
        if (isNaN(argv.edad)) {
            throw Error('La edad debe ser un valor numérico');
        }
        if (argv.edad < 18) {
            throw Error('La edad debe ser mayor a 18 años');
        }
        return true;
    })
    .argv

module.exports = { argv }