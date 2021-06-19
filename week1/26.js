// 자연수 N 과 정수 K 가 주어졌을 때 이항 계수를 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const a = input[0];
const b = input[1];

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(a) / (factorial(b) * factorial(a - b)));
