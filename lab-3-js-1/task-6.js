// Example criteria for Portugal
let country = "Portugal";
let language = "English"; // Temporarily changing to meet the criteria
let population = 49; // Assuming this is in millions, and temporarily adjusting to meet the criteria
let isIsland = false; // Portugal is not an island, so this meets one of the criteria

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
