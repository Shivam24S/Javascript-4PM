let basicAmount = 10000;

let HRA = 10;

let DA = 8;

let TA = 5;

// let HraAmount = (basicAmount * HRA) / 100;
// let DaAmount = (basicAmount * DA) / 100;
// let TaAmount = (basicAmount * TA) / 100;

// const finalSalary = basicAmount + HraAmount + DaAmount + TaAmount;

const finalSalary = basicAmount * (1 + (HRA + DA + TA) / 100);

console.log("final salary", finalSalary);
