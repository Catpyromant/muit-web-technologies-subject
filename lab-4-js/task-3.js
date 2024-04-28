const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percWorld3China = parseInt(percentageOfWorld3(1441));
const percWorld3India = parseInt(percentageOfWorld3(1380));
const percWorld3USA = parseInt(percentageOfWorld3(331));

console.log(percWorld3China);
console.log(percWorld3India);
console.log(percWorld3USA);
