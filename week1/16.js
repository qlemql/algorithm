// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((i) => parseInt(i));
let i = a;
let j = b;

while (i % j !== 0) {
  let n = i % j;
  // 나머지n
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((a * b) / j);
