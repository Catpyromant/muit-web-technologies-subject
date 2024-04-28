function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

let countryDescription1 = describeCountry("Finland", 6, "Helsinki");
let countryDescription2 = describeCountry("Canada", 38, "Ottawa");
let countryDescription3 = describeCountry("Australia", 25, "Canberra");

console.log(countryDescription1);
console.log(countryDescription2);
console.log(countryDescription3);
