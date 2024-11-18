const splitNinjas = async (string) => {
    let splitted = string.split("\n");
    let objetfied = [];

    for(let i of splitted) {
        let ninja = {};
        let tam = i.length;
        console.log(i);

        let reduced = i.slice(2,tam)
        objetfied.push(reduced);
    }
    return objetfied
}

module.exports = splitNinjas; 