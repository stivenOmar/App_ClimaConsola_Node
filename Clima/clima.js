const axios = require('axios');

const apiKey = "38e1d1a6977dcf5ede7a1a793f52d013";

function consultarClima(URL) {
    return axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?${encodeURI(URL)}&appid=${apiKey}&units=metric`
    }).get()
}

function cambiarApiKey(nuevApiKey) {
    apiKey = nuevApiKey;
}

async function climaCoordenadas(lat, lon) {
    let datos = await consultarClima(`lat=${lat}&lon=${lon}`);
    return datos.data.main.temp;
}

async function climaNombreCiudad(ciudad) {
    let datos = await consultarClima(`q=${ciudad}`)
    console.log(datos);
}

async function climaCodigoPaisCiudad(ciudad, codigoPais) {
    let datos = await consultarClima(`q=${ciudad},${codigoPais}`)
    console.log(datos);
}



module.exports = {
    cambiarApiKey,
    climaCoordenadas,
    climaNombreCiudad,
    climaCodigoPaisCiudad
}