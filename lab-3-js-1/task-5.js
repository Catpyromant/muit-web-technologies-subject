// Import the prompt-sync module
const prompt = require("prompt-sync")();

// Task 5. Equality Operators: == vs. ===
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}
