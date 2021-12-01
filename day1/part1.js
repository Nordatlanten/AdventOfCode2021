const fs = require("fs");
const puzzleInput = fs.readFileSync("./input.txt").toString();
let entries = puzzleInput.split("\n");
let counter = 0;
for (let i = 0; i < entries.length; i++) {
  if (parseInt(entries[i]) < parseInt(entries[i + 1])) counter++;
}
console.log("The answer is: " + counter);
