// 땅 위에 달팽이가 있다. 이 달팽이는 높이가 V미터인 나무 막대를 올라갈 것이다.

// 달팽이는 낮에 A미터 올라갈 수 있다. 하지만, 밤에 잠을 자는 동안 B미터 미끄러진다. 또, 정상에 올라간 후에는 미끄러지지 않는다.

// 달팽이가 나무 막대를 모두 올라가려면, 며칠이 걸리는지 구하는 프로그램을 작성하시오.

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => parseInt(num));

// input = [2, 1, 5]

const A = input.shift();
// 2를 제거하고 반환 a=2
const B = input.shift();
// 1를 제거하고 반환 b=1
const V = input.shift();
// 5를 제거하고 반환 v=5

console.log(Math.ceil((V - B) / (A - B)));
//.ceil은 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 정수로 반환한다. = 올림
  