// reduce 사용
function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = -absolutes[i];
    }
  }
  return absolutes.reduce((al, cv) => {
    return al + cv;
  }, 0);
}

// for 문 사용
function solution(absolutes, signs, sum = 0) {
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      absolutes[i] = -absolutes[i];
    }
  }
  for (let i of absolutes) {
    sum += i;
  }
  return sum;
}
