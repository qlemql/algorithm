// 계단 오르기 게임은 계단 아래 시작점부터 계단 꼭대기에 위치한 도착점까지 가는 게임이다. <그림 1>과 같이 각각의 계단에는 일정한 점수가 쓰여 있는데 계단을 밟으면 그 계단에 쓰여 있는 점수를 얻게 된다.

// <그림 1>

// 예를 들어 <그림 2>와 같이 시작점에서부터 첫 번째, 두 번째, 네 번째, 여섯 번째 계단을 밟아 도착점에 도달하면 총 점수는 10 + 20 + 25 + 20 = 75점이 된다.

// <그림 2>

// 계단 오르는 데는 다음과 같은 규칙이 있다.

// 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
// 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
// 마지막 도착 계단은 반드시 밟아야 한다.
// 따라서 첫 번째 계단을 밟고 이어 두 번째 계단이나, 세 번째 계단으로 오를 수 있다. 하지만, 첫 번째 계단을 밟고 이어 네 번째 계단으로 올라가거나, 첫 번째, 두 번째, 세 번째 계단을 연속해서 모두 밟을 수는 없다.

// 각 계단에 쓰여 있는 점수가 주어질 때 이 게임에서 얻을 수 있는 총 점수의 최댓값을 구하는 프로그램을 작성하시오.

// https://www.acmicpc.net/problem/2579

s = require("fs");
let floors = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => parseInt(num));

let N = floors[0];

let dp = new Array(N);
dp[0] = 0;
dp[1] = floors[1];
dp[2] = floors[1] + floors[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + floors[i],
    dp[i - 3] + floors[i - 1] + floors[i]
  );
}

console.log(dp[N]);

//

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `6
10
20
15
25
10
20`
)
  .split("\n")
  .map(Number);

let n = stdin[0];
let dp = []; //현재까지 밟은 계단 점수가 담겨있음
dp[0] = 0; //안 밟은 경우
dp[1] = stdin[1]; // 1번 밟은 경우
dp[2] = stdin[1] + stdin[2]; //연속 2번 밟은 경우

for (let i = 3; i <= n; i++) {
  //마지막 계단은 꼭 밟아야하고 & 연속 3번 계단을 밟을 수 없으므로 -> 이전 경우는 2가지로 나뉨
  //1.마지막 계단 전을 밟은 경우 : 마지막 계단 전전(i-2)을 밟지 못함 => stdin[i-1]+stdin[i]
  //2.마지막 계단 전을 밟지 않은 경우 : 마지막 계단 전전(i-2)을 밟음 => dp[i-2]+stdin[i]
  dp[i] = Math.max(dp[i - 3] + stdin[i] + stdin[i - 1], dp[i - 2] + stdin[i]);
}
console.log(dp[n]);
