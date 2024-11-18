const emojiStrip = require('emoji-strip')

const splitNinjas = async (string) => {
    let splitted = string.split("\n");
    let objetfied = [];

    for(let i of splitted) {
        let ninja = {};
        let noEmoji = emojiStrip(i).trim();
        let espacos = noEmoji.split(" ");

        ninja.emojis = i.split(" ")[0]
        ninja.clan = espacos.slice(espacos.length -1)[0];
        ninja.nome = espacos.join(" ");

        objetfied.push(ninja);
    }
    
    return objetfied
}

module.exports = splitNinjas; 