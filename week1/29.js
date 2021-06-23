// 스택 (stack)은 기본적인 자료구조 중 하나로, 컴퓨터 프로그램을 작성할 때 자주 이용되는 개념이다. 스택은 자료를 넣는 (push) 입구와 자료를 뽑는 (pop) 입구가 같아 제일 나중에 들어간 자료가 제일 먼저 나오는 (LIFO, Last in First out) 특성을 가지고 있다.

// 1부터 n까지의 수를 스택에 넣었다가 뽑아 늘어놓음으로써, 하나의 수열을 만들 수 있다. 이때, 스택에 push하는 순서는 반드시 오름차순을 지키도록 한다고 하자. 임의의 수열이 주어졌을 때 스택을 이용해 그 수열을 만들 수 있는지 없는지, 있다면 어떤 순서로 push와 pop 연산을 수행해야 하는지를 알아낼 수 있다. 이를 계산하는 프로그램을 작성하라.

let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => Number(num));

let stack = [];
let insertNumMax = 0;
let result = "";

for (let i = 1; i <= input[0]; i++) {
  if (input[i] > insertNumMax) {
    for (let j = insertNumMax + 1; j <= input[i]; j++) {
      stack.push(j);
      insertNumMax = j;
      result += `+\n`;
    }
    stack.pop();
    result += `-\n`;
  } else {
    let popNum = stack.pop();
    if (popNum !== input[i]) {
      result = "NO";
      break;
    } else {
      result += `-\n`;
    }
  }
}

console.log(result.trim());

//

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `8
4
3
6
8
7
5
2
1`
)
  .split("\n")
  .map(Number);

let stack = [];
let j = 0; //출력할 값의 index
let result = "";
for (let i = 1; i <= stdin[0]; i++) {
  stack.push(i);
  result += "+\n";

  while (stack.length !== 0 && stack[stack.length - 1] === stdin[j + 1]) {
    //스택이 비어있지 않고(비어있으면 더이상 pop 안해야함), 스택에 맨 위 값(pop할 값)이 출력할 값이랑 같은동안 반복
    stack.pop();
    result += "-\n";
    j++; //j를 1증가시켜 다음 출력할 값 확인
  }
}
if (stack.length !== 0) console.log("NO\n");
//for문 반복이 끝났음에도 stack이 비어있지 않다면 NO출력
else console.log(result);
