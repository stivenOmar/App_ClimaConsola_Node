const axios = require('axios');
//let baseURL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURI(lugar)}`
let headers = {
    "x-rapidapi-key": "3b398c5c25msh14e8cb911967605p1f84c8jsnf6678967feec"
}

function crearCabecera(lugar) {
    const axiosHeaders = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodeURI(lugar)}`,
        headers
    });
    return axiosHeaders;
}

function cambiarHeaders(headersNuevos) {
    headers = headersNuevos;
}

async function datosCiudad(lugar) {
    try {
        let peticion = await crearCabecera(lugar).get();
        return peticion.data;
    } catch (error) {
        return `Ciudad no encontrada`
    }
}

async function longitudLatitud(lugar) {
    let data = await datosCiudad(lugar);
    if (data.coord) {
        return {
            ciudad: data.name,
            latitud: data.coord.lat,
            longitud: data.coord.lon
        }
    } else {
        console.log(data);
    }
}

module.exports = {
    datosCiudad,
    cambiarHeaders,
    longitudLatitud
}