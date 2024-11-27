import fs from "fs";
import emojiStrip from 'emoji-strip'

import { findClan } from "./findClan.js";
import { findPatente } from "./findPatente.js";

const patentesEmojis = JSON.parse(fs.readFileSync("./db/patentesEmojis.json", "utf8"));
const clansByVillage = JSON.parse(fs.readFileSync("./db/clansByVillage.json", "utf8"));

export const countByVillage = async (ninjas) => {
    let results = {vilas:[], patentes: {}, total_ninjas_geral: 0}

    for(let i of clansByVillage) {
        results.vilas[i.vila] = {};
        results.vilas[i.vila]["ninjas_vila"] = 0;
        results.vilas[i.vila].clans = [];
        for(let j of i.clans) {
            results.vilas[i.vila].clans[j] = 0
        }
    }

    for(let patente of patentesEmojis) {
        results.patentes[patente.patente] = 0
    }
    results.patentes["Desconhecida"] = 0

    for(let ninja of ninjas){

        let clan = await findClan(ninja);
        let patente = await findPatente(ninja);

        for(let i of clansByVillage) {
            let nomeVila = emojiStrip(i.vila).replace(/ᗃ/g, "").replace(/ᗂ/g, "").replace(/࿙/g, "").trim();
            if(i.clans.includes(clan)) {
                results.vilas[nomeVila].clans[clan] += 1;
                results.vilas[nomeVila]["ninjas_vila"] += 1;
            }
            
        }

        results.patentes[patente] += 1;
        results.total_ninjas_geral += 1;

    }

    return results

}