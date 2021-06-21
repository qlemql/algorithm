// 재원이는 한 도시의 시장이 되었다. 이 도시에는 도시를 동쪽과 서쪽으로 나누는 큰 일직선 모양의 강이 흐르고 있다. 하지만 재원이는 다리가 없어서 시민들이 강을 건너는데 큰 불편을 겪고 있음을 알고 다리를 짓기로 결심하였다. 강 주변에서 다리를 짓기에 적합한 곳을 사이트라고 한다. 재원이는 강 주변을 면밀히 조사해 본 결과 강의 서쪽에는 N개의 사이트가 있고 동쪽에는 M개의 사이트가 있다는 것을 알았다. (N ≤ M)

// 재원이는 서쪽의 사이트와 동쪽의 사이트를 다리로 연결하려고 한다. (이때 한 사이트에는 최대 한 개의 다리만 연결될 수 있다.) 재원이는 다리를 최대한 많이 지으려고 하기 때문에 서쪽의 사이트 개수만큼 (N개) 다리를 지으려고 한다. 다리끼리는 서로 겹쳐질 수 없다고 할 때 다리를 지을 수 있는 경우의 수를 구하는 프로그램을 작성하라.

// 가능한 케이스가 몇인지를 구하는 것!

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 3
// 2 2
// 1 5
// 13 29

function factorial(n) {
  if (n < 1) return 1;
  return n * factorial(n - 1);
}

function combination(n, m) {
  return factorial(n) / (factorial(n - m) * factorial(m));
}

for (let i = 1; i <= Number(input[0]); i++) {
  let num = input[i].split(" ").map(Number);
  let [N, M] = [num[0], num[1]];
  let answer = combination(M, N);
  console.log(Math.round(answer));
}
