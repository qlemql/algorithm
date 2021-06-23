// 조규현과 백승환은 터렛에 근무하는 직원이다. 하지만 워낙 존재감이 없어서 인구수는 차지하지 않는다. 다음은 조규현과 백승환의 사진이다.

// 이석원은 조규현과 백승환에게 상대편 마린(류재명)의 위치를 계산하라는 명령을 내렸다. 조규현과 백승환은 각각 자신의 터렛 위치에서 현재 적까지의 거리를 계산했다.

// 조규현의 좌표 (x1, y1)와 백승환의 좌표 (x2, y2)가 주어지고, 조규현이 계산한 류재명과의 거리 r1과 백승환이 계산한 류재명과의 거리 r2가 주어졌을 때, 류재명이 있을 수 있는 좌표의 수를 출력하는 프로그램을 작성하시오.

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input.shift();

function getLocation(x1, y1, r1, x2, y2, r2) {
  let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  let rMinus = Math.abs(r1 - r2);
  let rPlus = r1 + r2;

  if (distance === 0 && r1 === r2) console.log(-1);
  else if (rMinus === distance || rPlus === distance) console.log(1);
  else if (rMinus < distance && rPlus > distance) console.log(2);
  else console.log(0);
}

input.forEach((line) => {
  let [x1, y1, r1, x2, y2, r2] = line.split(" ").map((num) => parseInt(num));
  getLocation(x1, y1, r1, x2, y2, r2);
});

//

//조규현을 A 백승환을 B, 류재명을 C라고 가정
//A와 B의 위치는 각 두원의 중점으로 간주하며, 두사람이 계산한 거리r1,r2는 각각 두원의 반지름이 됨
//d는 ri,r2사이 거리
//1)r1+r2 < d or |r1-r2| > d  : 교점 x
//2)d=0,r1=r2 : 교점 무한개(두원이 완전히 일치한 경우)
//3)r1+r2=d : 교점 1개 (외접한 경우)
//4)|r1-r2|=d : 교점 1개(내접하는 경우)
//5)r1-r2 < d < r1+r2 : 교점 2개

const fs = require("fs");
const stdin = (
  process.platform === "linux"
    ? fs.readFileSync("/dev/stdin").toString()
    : `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5`
)
  .trim()
  .split("\n");

let N = Number(stdin.shift());
let result = 0;
function getCase(x1, y1, r1, x2, y2, r2) {
  let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  let rMinus = Math.abs(r1 - r2);
  let rPlus = r1 + r2;

  if (rPlus < distance || rMinus > distance) result = 0;
  else if (distance === 0 && r1 === r2) result = -1;
  else if (rPlus === distance || rMinus === distance) result = 1;
  else if (rPlus > distance && distance > rMinus) result = 2;
  return result;
}

stdin.forEach((el) => {
  let [x1, y1, r1, x2, y2, r2] = el.split(" ").map(Number);
  console.log(getCase(x1, y1, r1, x2, y2, r2));
});
