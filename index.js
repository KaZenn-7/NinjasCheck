const splitNinjas = require("./func/readList");
const findClan = require("./func/findClan");

let stringg = `🎊🈂️🕊️ Akashi Bakurei 🕊️🈂️🎊
🎊🈂️🕊️ Freddy Bakurei 🕊️🈂️🎊
🎊🈂️🈯 Adelino Kitaku 🈯🈂️🎊
🎊🈂️🈯 Akaza Kitaku 🈯🈂️🎊`


main = async () => {

    let oi = await splitNinjas(stringg);
    
    for(let i of oi) {
        console.log(await findClan(i));
    }
}

main();