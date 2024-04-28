function days_of_a_year(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return 366;
  } else {
    return 365;
  }
}

console.log(days_of_a_year(2021));
console.log(days_of_a_year(2022));
console.log(days_of_a_year(2020));
