// At School of Code, we have an Energiser activity around 3pm. Yesterday, we played table tennis... on the floor.
// If there are 23 people on the course and everyone has X turns, and the total match time was totalTime seconds, write a function to show how long each person had with the paddle, to the next second, based on x.

//Solution
function turnTime(turns, totalTime) {
  let timePerTurn = totalTime / (turns * 23);
  return Math.ceil(timePerTurn);
}

//console.log(turnTime(12, 725));

module.exports = { turnTime };
