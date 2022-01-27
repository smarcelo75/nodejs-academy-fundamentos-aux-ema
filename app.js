require('colors');
const { argv } = require('./config/yargs');
const { grabarArchivo, eliminarRegistro } = require('./archivos/archivos');

const persona = {
    nombre: argv.nombre,
    apellido: argv.apellido,
    edad: argv.edad,
};

let nombreArchivo = '';

if (persona.edad >= 45) nombreArchivo = 'mayores45.txt';
else nombreArchivo = 'menores45.txt';

if (!argv.delete) grabarArchivo(nombreArchivo, persona);
else eliminarRegistro(nombreArchivo, persona);
