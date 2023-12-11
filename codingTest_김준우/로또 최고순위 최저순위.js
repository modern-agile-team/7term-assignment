function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  let ZeroCount = 0;
  let Max = 0;
  let Min = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      if (lottos[i] === win_nums[j]) {
        count++;
      }
    }
  }
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      ZeroCount++;
    }
  }
  for(let i = 0; i<=1; i++){
    if(ZeroCount + count == i)
        Max=6;
        if (count == 0) {
            Min = 6;
          }
          if (count == 1) {
            Min = 6;
          }
          if (count == 2) {
            Min = 5;
          }
          if (count == 3) {
            Min = 4;
          }
          if (count == 4) {
            Min = 3;
          }
          if (count == 5) {
            Min = 2;
          }
          if (count == 6) {
            Min = 1;
          }
  for(let i = 2; i<=6; i++){
    if(ZeroCount + count == i)
    Max=7-i;
    if (count == 0) {
        Min = 6;
      }
      if (count == 1) {
        Min = 6;
      }
      if (count == 2) {
        Min = 5;
      }
      if (count == 3) {
        Min = 4;
      }
      if (count == 4) {
        Min = 3;
      }
      if (count == 5) {
        Min = 2;
      }
      if (count == 6) {
        Min = 1;
      }
  }
  }
}
  