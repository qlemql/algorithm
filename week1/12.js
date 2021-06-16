// 베르트랑 공준은 임의의 자연수 n에 대하여, n보다 크고, 2n보다 작거나 같은 소수는 적어도 하나 존재한다는 내용을 담고 있다.

// 이 명제는 조제프 베르트랑이 1845년에 추측했고, 파프누티 체비쇼프가 1850년에 증명했다.

// 예를 들어, 10보다 크고, 20보다 작거나 같은 소수는 4개가 있다. (11, 13, 17, 19) 또, 14보다 크고, 28보다 작거나 같은 소수는 3개가 있다. (17,19, 23)

// 자연수 n이 주어졌을 때, n보다 크고, 2n보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하시오.

// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 케이스는 n을 포함하는 한 줄로 이루어져 있다.

// 입력의 마지막에는 0이 주어진다.

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((num) => parseInt(num));

for (let num of input) {
  if (num === 0) {
    break;
  }
  // n < 소수 < m(2n)
  // 구해야할 값의 범위 = n+1 ~ 2n
  const n = num + 1;
  // n+1
  const m = 2 * num;
  // 2n

  const isPrimeNumArr = new Array(m + 1);
  //2n + 1만큼 true로 채워준다
  let counter = 0;

  isPrimeNumArr.fill(true);
  isPrimeNumArr[0] = isPrimeNumArr[1] = false;
  //index의 0과 1은 false로 채워준다.

  //에라토스테네스의 체를 이용해서 소수 구하기
  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      //Math.pow(x,y) => x의 y승 ex) Math.pow(7,3) => 7*7*7 = 343 7의3승
      break;
    } else {
      for (let square = Math.pow(i, 2); square <= m; square += i) {
        isPrimeNumArr[square] = false;
      }
    }
  }
  for (let i = n; i <= m; i++) {
    if (isPrimeNumArr[i]) {
      counter++;
    }
  }
  console.log(counter);
}
