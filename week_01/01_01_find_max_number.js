input = [3, 5, 6, 1, 2, 4];

// const max = Math.max.apply(null, input);

// console.log(max);

function find_max_number(input) {
  max_num = input[0];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (i > j) {
        break;
      } else {
        return i;
      }
    }
  }
}

result = find_max_number(input);
console.log(result);

// input 배열의 최댓값을 구해라
// 1. js math함수로 간단하게 구현 가능
// 2. for문 사용??
// i와 j값이 둘 다 0이라 0을 반환하는 것 같다 i와 j의 값을 input값으로 변환시켜야할거같은데 방법을 모르겠다.
