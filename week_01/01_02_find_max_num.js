input = [3, 5, 6, 1, 2, 4];

function find_max_num(input) {
  max_num = input[0];
  //   max_num = 3으로 시작
  for (let i = 0; i < input.length; i++) {
    if (i > max_num) {
      max_num = i;
    }
  }
  return max_num;
}

result = find_max_num(input);
console.log(result);

// python 답을 js로 바꿨더니 답이 3만 나온다
// return을 for loop안에 넣어서 그랬다 근데 밖으로 뺐는데도 5가 나온다 왜?
//
