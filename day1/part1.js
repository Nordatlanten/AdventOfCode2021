const fs = require("fs");
const puzzleInput = fs.readFileSync("./input.txt").toString();
let entries = puzzleInput.split("\n").map((n) => +n);
let counter = 0;
for (let i = 0; i < entries.length; i++) {
  if (entries[i] < entries[i + 1]) counter++;
}
console.log("The answer is: " + counter);
