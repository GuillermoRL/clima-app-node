const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodedUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-RapidAPI-Key': 'a963a05103msh2627789d92e1993p1ae304jsn9a4c0d6d227e'
        }
    });
    const resp = await instance.get();
    // if( !resp.data.Result || resp.data.Result.length === 0 ){
    //     throw new Error( `No hay resultados para ${dir}` );
    // }
    // Result siempre viene vacio
    //const data = resp.data.Result[0];
    const direccion = "Mexico";//data.name;
    const lat = '21.490834';//data.lat;
    const lng = '104.897128';//data.lon;
    
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}