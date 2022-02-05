// problem 1: ana to vori
//  16 ana = 1 Vori
function anaToVori(anaPiont) {

    let vori = anaPiont / 16;
    return vori
}
console.log(anaToVori(32));


// problem 2: function pandaCoust
// shigona - 7; chomusa - 10; jilapi: 15;

const shigora = 7;
const chomusa = 10;
const jilapi = 15;
function pandaCost(shigoraQuantity, chomusaQuantity, jilapiQuantity) {

    let shigoraTotle = shigora * shigoraQuantity;
    let chomusaTotle = chomusa * chomusaQuantity;
    let jilapiTotle = jilapi * jilapiQuantity;

    let totle = shigoraTotle + chomusaTotle + jilapiTotle;
    return totle

}
console.log(pandaCost(50, 30, 10));

// problem 3: pcinicBudget

// 100 - 1/5000
// 101-200 = 1/4000
// 201-in = 1/3000

function pcinicBudget(person) {

    const person100Price = 5000;
    const person200Price = 4000;
    const person200UpPrice = 4000;

    if (person <= 100) {
        let cost = person * person100Price;
        return cost
    }
    else if (person <= 200) {
        const person100Lignth = 100 * person100Price;
        const restCost = person - 100;
        const partTwoPerson = restcost * person200Price;
        const totle = person100Lignth + partTwoPerson;
        return totle
    }
    else if (person >= 201) {
        const person100Lignth = 100 * person100Price;
        const person200 = 100 * person200Price;
        const restperson = person - 200;
        const restCost = restperson * person200UpPrice;
        const totleCost = person100Lignth + person200 +restCost;
        return totleCost; 

        
    }
}
console.log(pcinicBudget(201))

// problem 5: 