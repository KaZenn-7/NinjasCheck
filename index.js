const splitNinjas = require("./func/readList");
const findClan = require("./func/findClan");
const findPatente = require("./func/findPatente");

let stringg = `🎊🈂️🕊️ Akashi Bakurei 🕊️🈂️🎊
🎊🈂️🕊️ Freddy Bakurei 🕊️🈂️🎊
🎊🈂️🈯 Adelino Kitaku 🈯🈂️🎊
🎊🈂️🈯 Akaza Kitaku 🈯🈂️🎊`


main = async () => {

    let oi = await splitNinjas(stringg);

    console.log(await findClan(oi[0]))
    

}

main();