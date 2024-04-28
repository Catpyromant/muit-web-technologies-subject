// 1. If your country split in half, and each half would contain half the population, then how many people would live in each half?
let population = 10000000; // Population of Portugal
const populationInEachHalf = population / 2;
console.log(populationInEachHalf); // This will log 5000000

// 2. Increase the population of your country by 1 and log the result to the console
population += 1; // Increasing the population by 1
console.log(population); // This will log 10000001

// 3. Finland has a population of 6 million. Does your country have more people than Finland?
const finlandPopulation = 6000000;
const hasMorePeopleThanFinland = population > finlandPopulation;
console.log(hasMorePeopleThanFinland); // This will log true

// 4. The average population of a country is 33 million people. Does your country have less people than the average country?
const averagePopulation = 33000000;
const hasLessPeopleThanAverage = population < averagePopulation;
console.log(hasLessPeopleThanAverage); // This will log true

// 5. For the 'description', since it depends on the variable 'population' that changes, you'd keep using let if you plan to modify it later, or const if you set it once after the last change to 'population'.
const description = `Portugal is in Europe, and its ${
  population / 1000000
} million people speak Portuguese.`; // Task 2. Strings and Template Literals
console.log(description);

/**
 * Task 3. Taking Decisions: if / else Statements
 */
if (population > averagePopulation) {
  console.log("Portugal's population is above average.");
} else {
  const belowAverage = averagePopulation - population;
  console.log(
    `Portugal's population is ${belowAverage / 1000000} million below average.`
  );
}

population = 130; // Now changing the population to 130 million

if (population > averagePopulation) {
  console.log("Portugal's population is above average.");
} else {
  const belowAverage = averagePopulation - population;
  console.log(
    `Portugal's population is ${belowAverage} million below average.`
  );
}

population = 10.000001; // Setting the population back to the original value (10 million for the purpose of this example)

if (population > averagePopulation) {
  console.log("Portugal's population is above average.");
} else {
  const belowAverage = averagePopulation - population;
  console.log(
    `Portugal's population is ${belowAverage} million below average.`
  );
}

/**
 * Task 4. Type Conversion and Coercion
 */
/***
 * '9' - '5'; results in 4.
   '19' - '13' + '17'; results in the string '617'.
   '19' - '13' + 17; results in 23.
   '123' < 57; evaluates to False.
   5 + 6 + '4' + 9 - 4 - 2; results in 1143.
 */
