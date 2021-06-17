// 양수 A가 N의 진짜 약수가 되려면, N이 A의 배수이고, A가 1과 N이 아니어야 한다. 어떤 수 N의 진짜 약수가 모두 주어질 때, N을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4
2 3 4 6
`
).split("\n");

let numbers = input[1].split("").map(Number);

let maxNum = Math.max.apply(null, numbers);
let minNum = Math.min.apply(null, numbers);

console.log(maxNum * minNum);
