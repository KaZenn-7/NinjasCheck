const fs = require("fs");

const patentesEmojis = JSON.parse(fs.readFileSync("./db/patentesEmojis.json", "utf8"));

const findPatente = (ninja) => {

    let patente;

    for(let i in patentesEmojis) {
        if(ninja.emojis.includes(i)) {
            patente = patentesEmojis[i];
        }
    }

    if(patente != undefined) return patente;
    return "Patente não reconhecida"

}

module.exports = findPatente; 