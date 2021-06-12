// Q. 다음과 같은 숫자로 이루어진 배열이 있을 때, 이 배열 내에 특정 숫자가 존재한다면 True, 존재하지 않다면 False 를 반환하시오.

const input = [3, 5, 6, 1, 2, 4];

function find_number(number, array) {
  for (const i of array) {
    if (i == number) {
      return true;
    }
  }
  return false;
}

result = find_number(4, input);

console.log(result);
