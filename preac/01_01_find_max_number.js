// 1. Using Math.max.apply(null, arr)
// const max = Math.max.apply(null, input);

// 2. Using Math.max
// const max = Math.max(...input);

// console.log(max);

// 3. for loop

// let input = [3, 5, 6, 1, 2, 4];
// let max_value = -Infinity;
// Infinity는 나눗셈 사용 시 오류 발생 가능

// for (let i = 0; i < input.length; i++) {
//   let element = input[i];
//   if (element > max_value) {
//     max_value = element;
//   }
// }

// console.log(max_value);

// const input = [3, 5, 6, 1, 2, 4];

// let max = Number.MIN_SAFE_INTEGER;
// // MIN_SAFE_INTEGER JS에서 가장 작은 수
// for (let i = 0; i < input.length; i++) {
//   max = max < input[i] ? input[i] : max;
// }
// console.log(max);

// const input = [3, 5, 6, 1, 2, 4];
// debugger;
// for (const num of input) {
//   let found = true;
//   for (const compare of input) {
//     if (num < compare) {
//       found = false;
//       break;
//     }
//   }
//   if (found) {
//     console.log(num);
//     break;
//   }
// }

// 같이 알아두면 좋은 함수

// Math.min() 인자로 들어온 값 중에서 가장 작은 값을 반환하는 함수
// ex) Math.min(10, 20) => 10

// Math.max() 인자로 들어온 값 중에서 가장 큰 값을 반환하는 함수
// ex) Math.max(10, 20) => 20

// Function.prototype.apply()
// apply() 매서드는 주어진 this값과 배열로 제공되는 arguments로 함수를 호출한다
// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, numbers);

// console.log(max);
// expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);
// expected output: 2
