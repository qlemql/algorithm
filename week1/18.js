// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let [min, max] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map((num) => Number(num));

let ary = new Array(max + 1).fill(true);
ary[0] = false;
ary[1] = false;

for (let i = 2; i <= max; i++) {
  if (ary[i]) {
    for (let j = i * i; j <= max; j += i) {
      ary[j] = false;
    }
  }
}

for (let i = min; i <= max; i++) {
  ary[i] === true ? console.log(i) : null;
}
