function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percWorld1China = parseInt(percentageOfWorld1(1441));
const percWorld1India = parseInt(percentageOfWorld1(1380));
const percWorld1USA = parseInt(percentageOfWorld1(331));

console.log(percWorld1China);
console.log(percWorld1India);
console.log(percWorld1USA);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percWorld2China = parseInt(percentageOfWorld2(1441));
const percWorld2India = parseInt(percentageOfWorld2(1380));
const percWorld2USA = parseInt(percentageOfWorld2(331));

console.log(percWorld2China);
console.log(percWorld2India);
console.log(percWorld2USA);
