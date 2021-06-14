// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

//        472 ----- (1)
//      x 385 ----- (2)
// ----------
//       2360 ----- (3)
//      3776  ----- (4)
//     1416   ----- (5)
// ----------
//     181720 ----- (6)

// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num1 = Number[0];
const num2 = Number[1];

const oneNumber = num2 % 10;
// 385 % 10 = 5(1의 자리)
const tenNumber = Math.floor((num2 % 100) / 10);
// 385 % 100 = 85
// Math.floor(85 / 10) = 8(10의 자리)
const hundredNumber = Math.floor(num2 / 100);
// 385 / 100 = 3.85
// Math.floor(3.85) = 3(100의 자리)

console.log(oneNumber * num1);
// 1의자리 * 472
console.log(tenNumber * num1);
// 10의자리 * 472
console.log(hundredNumber * num1);
// 100의자리 * 472
console.log(num1 * num2);
