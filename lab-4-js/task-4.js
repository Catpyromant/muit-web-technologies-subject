function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const describePopulation = (country, population) => {
  const percentage = percentageOfWorld1(population).toFixed(2);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
};

const describeChina = describePopulation("China", 1441);
const describeIndia = describePopulation("India", 1380);
const describeUSA = describePopulation("USA", 331);

console.log(describeChina);
console.log(describeIndia);
console.log(describeUSA);
