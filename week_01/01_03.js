input = "hello my name is sparta";

const alphabet_occurence_array = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

function find_max_occurred_alphabet(input) {
  //  이 부분을 채워보세요!
  for (let i = 0; i < input.length; i++) {
    //   i가 for문을 돌면서 알파벳이 아닐경우 넘긴다
    if (!i == /^[a-zA-Z]+$/) {
      continue;
    } else {
      // 아스키(i) - 아스키('a') = arr_index로 넣어준다
      arr_index = input.charCodeAt([i]) - input.charCodeAt(["a"]);
      //   기존 alphabet배열에 arr_index를 하나씩 업데이트한다.
      alphabet_occurence_array[arr_index] += 1;
    }
  }
  return "alphabet_occurence_array";
}

result = find_max_occurred_alphabet(input);
console.log(result);

// const a = "acb".charAt(1);

// console.log(a);

// 문자열 확인 방법
// 확인할 문자열.includes()
//  string.includes( searchString, length )

// 빈 배열을 원하는 길이로 만들기
// Array.form({ length: x } , () => 0 );
