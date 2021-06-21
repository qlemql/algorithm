// 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `4 5 1
1 2
1 3
1 4
2 4
3 4`
).split("\n");

input = stdin[0].split(" ").map(Number);
let [N, M, V] = [input[0], input[1], input[2]]; //노드개수, 간선개수,시작노드번호
let matrix = Array.from(Array(N + 1), () => new Array(N + 1).fill(0)); //인접 행렬 배열 생성
let result = ""; //출력 결과
let visit = Array(N + 1).fill(0); // visit 배열

function dfs(v) {
  result += `${v} `;
  visit[v] = 1;
  for (let i = 1; i <= N; i++) {
    if (visit[i] == 1 || matrix[v][i] === 0) {
      //이미 방문했거나, v와 i노드가 인접하지 않다면 지나치기
      continue;
    }
    dfs(i);
  }
}

function bfs(v) {
  let q = [v]; //queue
  visit[v] = 0; //dfs 완료후 배열이 1로 채워져있으니 방문한 경우 1에서 0으로 변경 (출력해보면 [ 0, 1, 1, 1, 1 ])
  let result = "";

  while (q.length !== 0) {
    let v = q.shift();
    result += `${v} `;
    for (let i = 1; i < N + 1; i++) {
      if (visit[i] === 0 || matrix[v][i] === 0) {
        //이미 방문했거나, v와 i노드가 인접하지 않다면 지나치기
        continue;
      }
      q.push(i);
      visit[i] = 0; //i 방문했으니 visit에 담기
    }
  }
  return result;
}

for (let i = 1; i <= M; i++) {
  let data = stdin[i].split(" ").map(Number);
  let [x, y] = [data[0], data[1]];
  for (let i = 0; i < M; i++) {
    matrix[x][y] = 1;
    matrix[y][x] = 1;
  }
}

dfs(V);
console.log(result);
console.log(bfs(V));

return;

////////////////////////////////////////////////////////////////////

const input = [];
let graph, visited, result;

const strToNumArr = (str) =>
  str.split(" ").map((numString) => Number(numString));

//입력 받고 결과 출력하는 부분
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, M, V] = strToNumArr(input.shift());
    //그래프 배열의 요소 빈 배열로 초기화
    graph = [...Array(N + 1)].map(() => []);
    //방문 사실 저장할 배열 초기화
    visited = [...Array(N + 1)].fill(false);

    let v1, v2;
    //그래프 생성
    input.forEach((str) => {
      [v1, v2] = strToNumArr(str);
      //graph[v1] 배열에 v2 오름차순 맞게 삽입
      insertEdge(v1, v2);
      //graph[v2] 배열에 v1 오름차순 맞게 삽입
      insertEdge(v2, v1);
    });

    //결과 변수 초기화
    result = [];
    //깊이 우선 탐색
    dfs(V);
    //결과 출력
    console.log(result.join(" "));

    //방문 사실 저장하는 배열 초기화
    visited.fill(false);
    //결과 변수 초기화
    result = [];
    //너비 우선 탐색
    bfs(V);
    //결과 출력
    console.log(result.join(" "));
  });

//graph[vFront] 배열이 오름차순을 유지하도록 vBack을 적절한 위치에 삽입
const insertEdge = (vFront, vBack) => {
  let index;
  for (index = 0; index < graph[vFront].length; index++) {
    //인접한 정점 배열에서 vBack보다 크거나 같은 정점 찾을 때까지 continue
    if (graph[vFront][index] < vBack) {
      continue;
    }

    //문제에서 두 정점 사이에 여러 개의 간선이 있을 수 있다고 했으므로
    //인접한 정점 배열에 이미 vBack 정점이 있다면 삽입 인덱스에 null 저장
    if (graph[vFront][index] === vBack) {
      index = null;
    }
    break;
  }

  //삽입 인덱스가 null이 아니라면 vBack 삽입 인덱스에 삽입
  if (index !== null) {
    graph[vFront].splice(index, 0, vBack);
  }
};

//깊이 우선 탐색, 현재 정점 매개변수로 받음
const dfs = (v) => {
  //이미 방문했으면 리턴
  if (visited[v]) {
    return;
  }

  //방문 사실 저장
  visited[v] = true;
  //결과 변수에 정점 삽입
  result.push(v);
  //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점 방문
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });
};

//너비 우선 탐색, 시작 정점 매개변수로 받음
const bfs = (vStart) => {
  //방문할 정점을 담는 배열
  const willVisit = [vStart];
  let v;
  //방문할 정점이 안 남을 때까지
  while (willVisit.length !== 0) {
    //방문할 정점 배열의 첫 번째 원소 삭제 후 저장
    v = willVisit.shift();
    //이미 방문했으면 continue
    if (visited[v]) {
      continue;
    }

    //방문 사실 저장
    visited[v] = true;
    //결과 변수에 정점 삽입
    result.push(v);
    //인접한 정점 배열을 차례로 돌며 방문하지 않은 정점을
    //방문할 정점 배열의 끝에 삽입
    graph[v].forEach((vertex) => {
      if (!visited[vertex]) {
        willVisit.push(vertex);
      }
    });
  }
};
