const fs = require("fs");

const emoteClan = JSON.parse(fs.readFileSync("./db/clanEmojis.json", "utf8"));

const findClan = (ninja) => {

    let realClan;


    for(let i in emoteClan) {
        if(ninja.emojis.includes(i) && ninja.clan == emoteClan[i]) {
            realClan = ninja.clan;
        }
    }

    if(realClan != undefined) return realClan;
    return "Error: o nome do clan e o emoji nao combinam" 


}

module.exports = findClan; 