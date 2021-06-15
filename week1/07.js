// 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.

// 첫째 줄에 알파벳 대소문자로 이루어진 단어가 주어진다. 주어지는 단어의 길이는 1,000,000을 넘지 않는다.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

function Words(word) {
  const alphabet = new Array(26).fill(0);
  // 알파벳 수만큼 0으로 채워져있는 배열
  let charAry = word.toLowerCase().split("");
  // 소문자 변환 및 공백 제거
  let asciiA = "a".charCodeAt();

  charAry.forEach((char) => {
    let asciiChar = char.charCodeAt();
    let index = asciiChar - asciiA;
    alphabet[index] += 1;
    // 알파벳별 빈도수 업데이트
  });

  let maxNum = Math.max(...alphabet);
  // 알파벳 배열 중 가장 많이 나온 값 저장
  let maxIndex = alphabet.indexOf(maxNum);
  // 만약 가장 많이 나온 값이 여러개일 경우 가장 앞에 있는 값만 가져온다.
  let isSame = false;

  for (let i = 0; i < alphabet.length; i++) {
    if (maxNum === alphabet[i] && i !== maxIndex) {
      isSame = true;
    }
  }
  return isSame ? "?" : String.fromCharCode(maxIndex + asciiA).toUpperCase();
  //   isSame이 true일 경우 ? false일 경우 가장많이 나온 숫자 + 아스키코드A값 = 가장많이 나온 숫자의 문자 . 대문자변환
}

console.log(Words(input));
