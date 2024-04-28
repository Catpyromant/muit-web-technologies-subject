const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.log("List of goals:");
game.scored.forEach((player, index) => {
  console.log(`Goal ${index + 1}: ${player}`);
});

const odds = Object.values(game.odds);
const averageOdd = odds.reduce((sum, odd) => sum + odd, 0) / odds.length;
console.log(`Average odd: ${averageOdd.toFixed(2)}`);

console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
console.log(`Odd of draw: ${game.odds.x}`);
console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

const scorers = {};
game.scored.forEach((player) => {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
});

console.log("Scorers:", scorers);
