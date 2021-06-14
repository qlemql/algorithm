// 첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// 1. 평균을 구한다
// 2. 평균 이상인 갯수를 구한다
// 3. 평균이상인 갯수/총갯수 * 100

// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 5
// 5 50 50 70 80 100
// 7 100 95 90 80 70 60 50
// 3 70 90 80
// 3 70 90 81
// 9 100 99 98 97 96 95 94 93 91

let allCases = Number(input[0]);
// allCases = 5(시험 수)

for (let i = 1; i <= allCases; i++) {
  // 5번 돌고
  let cases = input[i].split(" ");
  // input[i]일 경우 [5,50,50,70,80,100] 공백만 없애준다
  let scoreCaseCount = Number(cases[0]);
  //   scroeCaseCount = [5,50,50,70,80,100][0] => 5(학생수)
  let sum = 0;

  for (let j = 1; j <= scoreCaseCount; j++) {
    //   학생 수만큼 돌린다
    sum += Number(cases[j]);
    // j가 1번부터 시작하니까 [5,50,50,70,80,100] 50부터 sum에 더해진다
  }
  let reverage = sum / scoreCaseCount;

  let highScoreStudent = 0;
  for (let k = 1; k <= scoreCaseCount; k++) {
    //   학생수만큼 돌린다
    if (reverage < cases[k]) {
      // 평균 < [5,50,50,70,80,100][1] = 50이라면
      highScoreStudent++;
      //   조건을 만족한 학생 수++
    }
  }

  result = ((highScoreStudent / scoreCaseCount) * 100).toFixed(3);
  console.log(result + "%");
}
