const splitNinjas = require("./func/readList");
const findClan = require("./func/findClan");
const findPatente = require("./func/findPatente");
const countByVillage = require("./func/countByVillage");
const formatMessage = require("./func/formatMessage");

let stringg = `🎊🈂️🕊️ Akashi Bakurei 🕊️🈂️🎊
🎊🈂️🕊️ Freddy Bakurei 🕊️🈂️🎊
🎊🈂️🈯 Adelino Kitaku 🈯🈂️🎊
🎊🈂️🈯 Akaza Kitaku 🈯🈂️🎊`


main = async () => {

    let oi = await splitNinjas(stringg);

    let results = await countByVillage(oi)

    let msg = await formatMessage(results); 

    console.log(results);
    

}

main();