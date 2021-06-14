// Q. 정수를 입력 했을 때, 그 정수 이하의 소수를 모두 반환하시오.

// 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수 없는 1보다 큰 자연수이다.

// 20이 입력된다면, 아래와 같이 반환해야 합니다!
// [2, 3, 5, 7, 11, 13, 17, 19];

const input = 20;

function find_prime_list_under_number(input) {
    for (const num in input) {
        const under_number = (input % num) = 0;
    }
  return under_number;
}

result = find_prime_list_under_number(input);
console.log(result);
