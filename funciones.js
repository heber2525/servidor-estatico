const {createReadStream} = require("fs");

function tipo(extension){
    switch(extension){
        case "css": return "text/css";
        case "js": return "text/javascript";
        case "jpg": return "image/jpeg";
        case "jpeg": return "image/jpeg";
        case "png": return "image/png";
        case "json": return "application/json";
        default: return "text/html";
    }
}

function servirFichero(respuesta,ruta,tipo,status){
    respuesta.writeHead(status, { "Content-type" : tipo });

    let fichero = createReadStream(ruta);

    fichero.pipe(respuesta);

    fichero.on("end", () => respuesta.end());

}

module.exports = {tipo,servirFichero};