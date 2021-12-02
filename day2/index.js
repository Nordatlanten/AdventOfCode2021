const fs = require("fs");
const puzzleInput = fs.readFileSync("./input.txt").toString();

function part1(log) {
  let [x, y] = Array(2).fill(0);
  log.split("\n").map((e) => {
    let i = e.split(" ").map((n) => (n.length == 1 ? parseInt(n) : n));
    switch (i[0]) {
      case "down":
        y += i[1];
        break;
      case "forward":
        x += i[1];
        break;
      case "up":
        y -= i[1];
        break;
    }
  });
  return x * y;
}

function part2(log) {
  let [x, y, z] = Array(3).fill(0);
  log.split("\n").map((e) => {
    let i = e.split(" ").map((n) => (n.length == 1 ? parseInt(n) : n));
    switch (i[0]) {
      case "down":
        z += i[1];
        break;
      case "forward":
        x += i[1];
        let a = z * i[1];
        y += a;
        break;
      case "up":
        z -= i[1];
        break;
    }
  });
  return x * y;
}

console.log("Part 1 answer is: ", part1(puzzleInput));
console.log("Part 2 answer is: ", part2(puzzleInput));
