// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.

// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = [];

rl.on("line", (line) => {
  input.push(line.split(" ").map((x) => parseInt(x)));
}).on("close", () => {
  const testCase = input.shift();
  let answer = "";

  for (let i = 0; i < testCase; i++) {
    answer += least(Math.max(...input[i]), Math.min(...input[i])) + "\n";
  }

  console.log(answer);
});

function least(a, b) {
  let i = a;
  let j = b;
  let r;

  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }

  return (i * j) / a;
}
