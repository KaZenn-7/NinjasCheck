const formatMessage = async (results) => {

    let vilas = results.vilas

    let msg = "";

    for(vila of vilas){
        `彡 ${vila.upper()}\n`
    }

}
   

module.exports = formatMessage; 