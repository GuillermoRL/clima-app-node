const axios = require('axios');

const getClima = async(lat, lng) => {
    console.log("Latitud",  lat);
    console.log("Longitud",  lng);
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9319536ce081be5cb4021d2bb98124c6`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}