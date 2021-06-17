// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", (line) => input.push(line)).on("close", () => {
  input.map((line, idx) => {
    if (idx === 0) return;
    const [cmd, num] = line.split(" ");
    if (cmd === "push") {
      cmdObj[cmd](parseInt(num));
    } else answer += `${cmdObj[cmd]()}\n`;
  });
  console.log(answer);
  process.exit();
});

const stack = [];
let top = 0;
let answer = "";

const cmdObj = {
  push: (x) => (stack[top++] = x),
  pop: () => {
    if (top) {
      top--;
      return stack.splice(-1);
    } else return -1;
  },
  size: () => top,
  empty: () => (!top ? 1 : 0),
  top: () => (top ? stack[top - 1] : -1),
};
