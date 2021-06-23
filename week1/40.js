// 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 따라서 245는 256의 생성자가 된다. 물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.

// 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.

let N = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let strN = String(N).split("");
let min = N - (Number(strN[0]) + (strN.length - 1) * 9);
let result;

for (let i = min; i < N; i++) {
  let sum = i;
  let strI = String(i).split("");
  sum += strI.reduce((a, b) => Number(a) + Number(b), 0);
  if (sum === N) {
    result = i;
    break;
  }
}

result ? console.log(result) : console.log(0);

//

const fs = require("fs");
let stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `256`
).trim();

let nInt = Number(stdin);

let result = 0;

for (let i = 0; i < nInt; i++) {
  let sum = 0;
  let iStrArr = String(i).split(""); //숫자 i를 문자열로 바꾼후 배열에 저장 ex.i=245면 iStrArr배열에 [ '2', '4', '5' ]

  iStrArr.forEach((el) => {
    //배열의 각 원소 더해 sum에 저장
    sum += Number(el);
  });
  sum += i; // ex. sum에 245+2+4+5 이 담김
  if (sum === nInt) {
    // sum 값이 예제 입력 값과 같다면
    result = i; //reuslt에 담기
    break;
  }
}
result ? console.log(result) : console.log(0);
