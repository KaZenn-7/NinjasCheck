const formatMessage = async (results) => {

    let vilas = results.vilas
    let patentes = results.patentes

    let msg = "";

    for(vila in vilas){
        let clans = vilas[vila].clans
        msg += `彡${vila.toUpperCase()}\n`
        for(let i in clans){
            msg += `├─ ${i}: ${clans[i]}\n`
        }
        msg += `╰─ Total de ninjas: ${vilas[vila].ninjas_vila}\n\n`
    }

    msg += "☬ Patentes\n"

    for(patente in patentes){
       msg += `├─ ${patente}: ${patentes[patente]}\n`
    }

    msg += `╰─ 🕉️👒 Total Geral de Ninjas: ${results.total_ninjas_geral}`

    return msg;

}
   

module.exports = formatMessage; 