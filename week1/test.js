const input = ["2", "6 12 10", "30 50 72"];
const T = parseInt(input.shift());

for (let i = 0; i < T; i++) {
  const HWN = input[i].split(" ");

  // input[0].split = ['61210'] / input[1].split = ['305072']
  let H = parseInt(HWN.shift());
  // i = 0 , H = 6 / i = 1, H = 30
  let N = parseInt(HWN.shift());
  console.log(N);
}
