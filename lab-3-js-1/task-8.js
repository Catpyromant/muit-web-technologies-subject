let population = 10; // Starting with an initial population
const country = "Portugal";

population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// Change population to 13
population = 13;
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// Then change population to 130
population = 130;
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// Finally, set the population back to the original
population = 10; // Or whatever the original value was meant to be
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

// next task
// Data 1: Arman and Kuat's information
let armansMass1 = 78; // kg
let armansHeight1 = 1.69; // meters
let kuatsMass1 = 92; // kg
let kuatsHeight1 = 1.95; // meters

// Calculate BMIs for Data 1
let armansBMI1 = armansMass1 / armansHeight1 ** 2;
let kuatsBMI1 = kuatsMass1 / kuatsHeight1 ** 2;
let armanHigherBMI1 = armansBMI1 > kuatsBMI1;

console.log(
  `Data 1: Arman's BMI is ${armansBMI1}, Kuat's BMI is ${kuatsBMI1}. Is Arman's BMI higher than Kuat's? ${armanHigherBMI1}`
);

// Data 2: Arman and Kuat's information updated
let armansMass2 = 95; // kg
let armansHeight2 = 1.88; // meters
let kuatsMass2 = 85; // kg
let kuatsHeight2 = 1.76; // meters

// Calculate BMIs for Data 2
let armansBMI2 = armansMass2 / armansHeight2 ** 2;
let kuatsBMI2 = kuatsMass2 / kuatsHeight2 ** 2;
let armanHigherBMI2 = armansBMI2 > kuatsBMI2;

console.log(
  `Data 2: Arman's BMI is ${armansBMI2}, Kuat's BMI is ${kuatsBMI2}. Is Arman's BMI higher than Kuat's? ${armanHigherBMI2}`
);

/**
 *  Task 9
 * */
// Improved output for Data 1
if (armanHigherBMI1) {
  console.log(
    `Data 1: Arman's BMI (${armansBMI1.toFixed(
      1
    )}) is higher than Kuat's (${kuatsBMI1.toFixed(1)})!`
  );
} else {
  console.log(
    `Data 1: Kuat's BMI (${kuatsBMI1.toFixed(
      1
    )}) is higher than Arman's (${armansBMI1.toFixed(1)})!`
  );
}

// Improved output for Data 2
if (armanHigherBMI2) {
  console.log(
    `Data 2: Arman's BMI (${armansBMI2.toFixed(
      1
    )}) is higher than Kuat's (${kuatsBMI2.toFixed(1)})!`
  );
} else {
  console.log(
    `Data 2: Kuat's BMI (${kuatsBMI2.toFixed(
      1
    )}) is higher than Arman's (${armansBMI2.toFixed(1)})!`
  );
}
