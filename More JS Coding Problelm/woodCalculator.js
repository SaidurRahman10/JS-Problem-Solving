function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

const chairWood =  perChair   * chairQuantity;
const tableWood = perTable * tableQuantity;
const bedWood =   perBed     * bedQuantity;

let totalWood = chairWood + tableWood + bedWood;
return totalWood;
}

const totalWood = woodCalculator(1,1,1)
console.log('Total Wood requirement :',totalWood);


