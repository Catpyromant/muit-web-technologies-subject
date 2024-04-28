function calculateWinner(scoresAlmaty, scoresAstana) {
  const averageAlmaty =
    scoresAlmaty.reduce((acc, curr) => acc + curr, 0) / scoresAlmaty.length;
  const averageAstana =
    scoresAstana.reduce((acc, curr) => acc + curr, 0) / scoresAstana.length;
  const minimumScore = 100;

  if (averageAlmaty >= minimumScore && averageAstana >= minimumScore) {
    if (averageAlmaty === averageAstana) {
      console.log(
        `It's a draw with both teams scoring above ${minimumScore}. Both teams score ${averageAlmaty.toFixed(
          1
        )}`
      );
    } else if (averageAlmaty > averageAstana) {
      console.log(
        `Almaty wins with an average score of ${averageAlmaty.toFixed(1)}`
      );
    } else {
      console.log(
        `Astana wins with an average score of ${averageAstana.toFixed(1)}`
      );
    }
  } else {
    if (averageAlmaty === averageAstana) {
      console.log(
        "It's a draw, but no team reaches the minimum score required."
      );
    } else if (
      (averageAlmaty > averageAstana && averageAlmaty >= minimumScore) ||
      (averageAstana > averageAlmaty && averageAstana < minimumScore)
    ) {
      console.log(
        `Almaty wins with an average score of ${averageAlmaty.toFixed(
          1
        )}, meeting the minimum score.`
      );
    } else if (
      (averageAstana > averageAlmaty && averageAstana >= minimumScore) ||
      (averageAlmaty > averageAstana && averageAlmaty < minimumScore)
    ) {
      console.log(
        `Astana wins with an average score of ${averageAstana.toFixed(
          1
        )}, meeting the minimum score.`
      );
    } else {
      console.log(
        "No team wins the trophy due to not meeting the minimum score requirement."
      );
    }
  }
}

// Test data
const scoresAlmaty1 = [96, 108, 89];
const scoresAstana1 = [88, 91, 110];
calculateWinner(scoresAlmaty1, scoresAstana1); // Data 1

const scoresAlmatyBonus1 = [97, 112, 101];
const scoresAstanaBonus1 = [109, 95, 123];
calculateWinner(scoresAlmatyBonus1, scoresAstanaBonus1); // Data Bonus 1

const scoresAlmatyBonus2 = [97, 112, 101];
const scoresAstanaBonus2 = [109, 95, 106];
calculateWinner(scoresAlmatyBonus2, scoresAstanaBonus2); // Data Bonus 2
