const fs = require("fs");

const emoteClan = JSON.parse(fs.readFileSync("./db/clanEmojis.json", "utf8"));

const findClan = (ninja) => {

    let realClan;


    for(let i of emoteClan) {
        if(ninja.emojis.includes(i.emoji) && ninja.clan == i.clan) {
            realClan = ninja.clan;
        }
    }

    if(realClan != undefined) return realClan;
    return "Error: o nome do clan e o emoji nao combinam" 


}

module.exports = findClan; 