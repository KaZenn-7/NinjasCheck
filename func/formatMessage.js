const fs = require('fs');
const clansByVillage = JSON.parse(fs.readFileSync("./db/clansByVillage.json", "utf8"));

const formatMessage = async (results) => {

    let vilas = results.vilas
    let patentes = results.patentes

    let msg = "";

    for(vila in vilas){
        let indexVila = clansByVillage.map(i => i.vila).indexOf(vila);
        let emojiVila = clansByVillage[indexVila].emoji;
        let clans = vilas[vila].clans

        msg += `彡 *ᗃ${emojiVila} ${vila.toUpperCase()} ᗂ${emojiVila}*\n`

        for(let i in clans){
            msg += `├─ ${i}: *${clans[i]}*\n`
        }
        msg += `╰─ _Total:_ ${vilas[vila].ninjas_vila}\n\n`
    }

    msg += "☬ *Patentes*\n"

    for(patente in patentes){
       msg += `├─ ${patente}: *${patentes[patente]}*\n`
    }

    msg += `╰─ 🕉️👒 *Total Geral de Ninjas:* ${results.total_ninjas_geral}`

    return msg;

}
   

module.exports = formatMessage; 