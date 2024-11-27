import { splitNinjas } from "./func/splitNinjas.js";
import { countByVillage } from "./func/countByVillage.js"
import { formatMessage } from "./func/formatMessage.js";

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


let main = async () => {

    let oi = await splitNinjas(stringg);

    let results = await countByVillage(oi)

    let msg = await formatMessage(results); 

    console.log(msg);
    

}

main();