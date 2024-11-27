import fs from "fs"

const patentesEmojis = JSON.parse(fs.readFileSync("./db/patentesEmojis.json", "utf8"));

export const findPatente = (ninja) => {

    let patente;

    for(let i of patentesEmojis) {
        if(ninja.emojis.includes(i.emoji)) {
            patente = i.patente;
        }
    }

    if(patente != undefined) return patente;
    return "Desconhecida"

}