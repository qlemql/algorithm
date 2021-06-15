// Q.  다음과 같은 문자열을 입력받았을 때, 어떤 알파벳이 가장 많이 포함되어 있는지 반환하시오

const input = "hello my name is sparta";

const alphabet_occurence_array = Array(26).fill(0);
//  Array(배열길이).fill(value[, start[, end]])
// value = 배열에 채울 값
// start = value 값을 채울 배열의 시작 index이다 기본값0
// end = value 값을 채울 배열의 종료 index이다 기본값은 arr.length

function isCharLetter(char) {
  return /[a-zA-Z]/.test(char);
}

for (char in string) {
  if (!char.isCharLetter()) {
    continue;
  } else {
    arr_index = char.charCodeAt(0)
  }
}

// replace("찾을 문자열", "변경할 문자열")
// 정규 표현식 \s 란 스페이스, 탭, 폼피드, 줄 바꿈 문자등을 포함한 하나의 공백 문자
// 정규 표현식 /g 전체 모든 문자열을 변경 global

// string.cahrCodeAt(index)은 index에 해당하는 문자의 unicode값을 리턴해준다
// string.cahrAt(index)은 index에 해당하는 unicode값을 문자로 리턴해준다

console.log(input);
// result = find_max_occurred_alphabet(input);
// console.log(result);

// const a = "acb".charAt(1);

// console.log(a);

// 문자열 확인 방법
// 확인할 문자열.includes()
//  string.includes( searchString, length )

// 빈 배열을 원하는 길이로 만들기
// Array.form({ length: x } , () => 0 );
