const fs = require("fs");
const puzzleInput = fs.readFileSync("./input.txt").toString();
let entries = puzzleInput.split("\n");
let counter = 0;

for (let i = 0; i < entries.length; i++) {
  let sum1 =
    parseInt(entries[i]) + parseInt(entries[i + 1]) + parseInt(entries[i + 2]);
  let sum2 =
    parseInt(entries[i + 1]) +
    parseInt(entries[i + 2]) +
    parseInt(entries[i + 3]);
  if (sum1 < sum2) counter++;
}
console.log("The answer is: " + counter);
