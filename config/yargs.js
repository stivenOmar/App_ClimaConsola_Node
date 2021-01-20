const paqueteYargs = require('yargs');


function crearComando(titulo, descripcion, argumentos) {
    paqueteYargs.command(titulo, descripcion, aliasOpciones(argumentos));
}

function aliasOpciones(argumentos) {
    let objetoComando = {};
    for (const argumento of argumentos) {
        objetoComando[argumento] = {
            alias: argumento.charAt()
        }
    }
    return objetoComando;
}

function crearOpciones(argumentos) {
    paqueteYargs.options(aliasOpciones(argumentos));
}

function estadoArgv() {
    return paqueteYargs.argv;
}

function valorPropiedadArgv(prop) {
    return estadoArgv()[prop];
}

module.exports = {
    crearComando,
    estadoArgv,
    valorPropiedadArgv,
    crearOpciones
}