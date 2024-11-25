const emojiStrip = require('emoji-strip')

const splitNinjas = (string) => {

    let splitted = string.split("\n");

    let objetfied = [];

    for(let i of splitted) {
        if(i.length < 1) continue;
        let ninja = {};
        let noEmoji = emojiStrip(i).trim();
        let espacos = noEmoji.split(" ");

        ninja.emojis = i.split(" ")[0]
        ninja.clan = espacos.slice(espacos.length -1)[0];
        ninja.nome = espacos.join(" ");

        objetfied.push(ninja);
    }
    
    // console.log(objetfied)
    return objetfied
}

module.exports = splitNinjas; 