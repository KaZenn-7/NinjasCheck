const fs = require("fs");
const emojiStrip = require('emoji-strip')

const emoteClan = JSON.parse(fs.readFileSync("./db/clanEmojis.json", "utf8"));
const patentesEmojis = JSON.parse(fs.readFileSync("./db/patentesEmojis.json", "utf8"));
const clansByVillage = JSON.parse(fs.readFileSync("./db/clansByVillage.json", "utf8"));

const findClan = require("./findClan");
const findPatente = require("./findPatente");

const countByVillage = async (ninjas) => {
    let results = {vilas:[], patentes_results: {}, total_ninjas_geral: 0}
    // let patentes_results = {}
    // let total_ninjas_geral = 0

    for(let i of clansByVillage) {
        let nomeVila = emojiStrip(i.vila).replace(/ᗃ/g, "").replace(/ᗂ/g, "").replace(/࿙/g, "").trim();
        results.vilas[nomeVila] = {};
        results.vilas[nomeVila]["ninjas_vila"] = 0;
        results.vilas[nomeVila].clans = [];
        for(let j of i.clans) {
            results.vilas[nomeVila].clans[j] = 0
        }
    }

    for(let patente of patentesEmojis) {
        results.patentes_results[patente] = 0
    }

    for(ninja of ninjas){

        let clan = await findClan(ninja);
        let patente = await findPatente(ninja);

        for(let i of clansByVillage) {
            let nomeVila = emojiStrip(i.vila).replace(/ᗃ/g, "").replace(/ᗂ/g, "").replace(/࿙/g, "").trim();
            if(i.clans.includes(clan)) {
                results.vilas[nomeVila].clans[clan] += 1;
                results.vilas[nomeVila]["ninjas_vila"] += 1;
            }
            
        }

        results.patentes_results[patente] += 1;
        results.total_ninjas_geral += 1;

    }

    return results

}
   

module.exports = countByVillage; 