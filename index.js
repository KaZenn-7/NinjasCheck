const splitNinjas = require("./func/splitNinjas");
const countByVillage = require("./func/countByVillage");
const formatMessage = require("./func/formatMessage");

let stringg = `🎊👑📛Shirohege D. Welk📛👑🎊
🎊🀄®️Levi Raiunko®️🀄🎊
🎊🀄🦈Izuna hoshigaki🦈🀄🎊
🎊♦️🌘Gojo Urashiki🌘♦️🎊
🎊🃏⛔Lilith Chinoike⛔🃏🎊
🎊🃏☠️Nuvem Kaguya☠️🃏🎊
🎊🔘🐝Notz Kamizuru🐝🔘🎊
🎊🔘🛗Has Kazekage🛗🔘🎊
🎊⭕Ⓜ️Kuroko MomochiⓂ️⭕🎊
🎊⭕🌘Kimiko Urashiki🌘⭕🎊
🎊💠🐝Zeni Kamizuru🐝💠🎊
🎊💠☮️Zenit Kozuki☮️💠
🎊✴️🕊️Satoro Gojo Bakurei🕊️✴️🎊
🎊✴️☸️Hagoromo Oden☸️✴️🎊
🎊✳️🈚Musashi Render🈚✳️🎊
🎊✳️☸️Wsl Oden☸️✳️🎊
🎊🈂️🐝 Tobirama Kamizuru 🐝🈂️🎊
🎊🈂️🐝Morgana kamizuru 🐝🈂️🎊`


main = async () => {

    let oi = await splitNinjas(stringg);

    let results = await countByVillage(oi)

    let msg = await formatMessage(results); 

    console.log(msg);
    

}

main();