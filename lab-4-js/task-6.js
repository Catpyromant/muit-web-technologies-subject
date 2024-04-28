const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgYesyl, avgYertys) {
  if (avgYesyl >= 2 * avgYertys) {
    console.log(`Yesyl wins (${avgYesyl} vs. ${avgYertys})`);
  } else if (avgYertys >= 2 * avgYesyl) {
    console.log(`Yertys win (${avgYertys} vs. ${avgYesyl})`);
  } else {
    console.log("No team wins");
  }
}

const avgYesyl1 = calcAverage(44, 23, 71); // 46
const avgYertys1 = calcAverage(65, 54, 49); // 56

checkWinner(avgYesyl1, avgYertys1);

const avgYesyl2 = calcAverage(85, 54, 41); // 60
const avgYertys2 = calcAverage(23, 34, 27); // 28

checkWinner(avgYesyl2, avgYertys2);
