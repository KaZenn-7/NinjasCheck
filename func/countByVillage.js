const fs = require("fs");

const emoteClan = JSON.parse(fs.readFileSync("./db/clanEmojis.json", "utf8"));
const patentesEmojis = JSON.parse(fs.readFileSync("./db/patentesEmojis.json", "utf8"));
const clansByVillage = JSON.parse(fs.readFileSync("./db/clansByVillage.json", "utf8"));

const countByVillage = (ninjas) => {
    let results = {}
    let patentes_results = {}
    let total_ninjas = 0

    for(let i of clansByVillage) {
        results[i.vila]["total_ninjas"] = 0;
        for(let j of i.clans) {
            results[i.vila][j] = 0
        }
    }

    for(let patentes of patentesEmojis) {
        patentes_results[patente] = 0
    }



}
   

module.exports = countByVillage; 