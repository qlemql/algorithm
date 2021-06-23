// 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.

// 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
// 고른 수열은 오름차순이어야 한다.

let fs = require("fs");
let [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(function (a) {
    return +a;
  });

let visited = new Array(N).fill(false);
let current = [];
let result = "";

function dfs(depth, start, N, M) {
  if (depth === M) {
    let resultStr = current.join(" ");
    result += `${resultStr}\n`;
    return;
  }

  for (let i = start; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      current.push(i + 1);
      dfs(depth + 1, i + 1, N, M);
      visited[i] = false;
      current.pop();
    }
  }
}

dfs(0, 0, N, M);
console.log(result.trim());

//

const fs = require("fs");
let stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 2`
)
  .trim()
  .split(" ")
  .map(Number);

let [N, M] = [stdin[0], stdin[1]];
let [result, visit, suyeol] = ["", [], []];

function dfs(num, cnt) {
  //suyeol 배열에 오름차순으로 숫자가 쌓여 suyeol 크기가 M이 되면 result 문자열에 수열을 문자열 형대로 추가
  if (cnt === M) result += `${suyeol.join(" ")}\n`;
  for (let i = num; i <= N; i++) {
    suyeol.push(i);
    dfs(i + 1, cnt + 1);
    suyeol.pop();
  }
  return result;
}

console.log(dfs(1, 0));
