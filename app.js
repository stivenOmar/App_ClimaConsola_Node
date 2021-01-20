const yargs = require('./config/yargs');
const ciudad = require('./Ciudad/ciudad');
const clima = require('./Clima/clima');

yargs.crearOpciones(['direccion'])
const direccion = yargs.valorPropiedadArgv('direccion')

async function getInfo(direccion) {
    console.log('Cargando .... ');
    try {
        //let datosCiudad = await ciudad.longitudLatitud(direccion);
        let climaCiudad = await clima.climaNombreCiudad(direccion);
        console.log(`El clima de la ciudad ${datosCiudad.ciudad} es ${climaCiudad} C`);
    } catch (error) {
        console.log(`No se pudo determinar el clima de la ciudad ${direccion}`);
    }
}

getInfo(direccion);