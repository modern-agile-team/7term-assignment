function solution(numbers, hand) {
  const result = [];
  let nowL = [3, 0],
    nowR = [3, 2];
  hand = hand === "right" ? "R" : "L";
  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
      case 4:
      case 7:
        result.push("L");
        nowL = findNow(numbers[i]);
        break;
      case 3:
      case 6:
      case 9:
        result.push("R");
        nowR = findNow(numbers[i]);
        break;
      case 2:
      case 5:
      case 8:
      case 0:
        let now = findNow(numbers[i]);
        let disR = Math.abs(nowR[0] - now[0]) + Math.abs(nowR[1] - now[1]);
        let disL = Math.abs(nowL[0] - now[0]) + Math.abs(nowL[1] - now[1]);
        if (disR === disL) {
          result.push(hand);
          hand === "L" ? (nowL = now) : (nowR = now);
        } else if (disR > disL) {
          result.push("L");
          nowL = now;
        } else {
          result.push("R");
          nowR = now;
        }
        break;
    }
  }
  return result.join("");
}

findNow = (numbers) => {
  const keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let now = [];
  for (let index1 = 0; index1 < 4; index1++) {
    for (let index2 = 0; index2 < 3; index2++) {
      keypad[index1][index2] === numbers ? (now = [index1, index2]) : now;
    }
  }
  return now;
};
