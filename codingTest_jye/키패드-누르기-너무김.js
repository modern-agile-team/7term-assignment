function solution(numbers, hand) {
  let answer = [];
  let locationL = [3, 0];
  let locationR = [3, 2];
  const location2 = [0, 1];
  const location5 = [1, 1];
  const location8 = [2, 1];
  const location0 = [3, 1];
  function check(numbers, hand) {
    switch (numbers) {
      case 2:
        if (
          Math.abs(locationL[0] - location2[0]) +
            Math.abs(locationL[1] - location2[1]) >
          Math.abs(locationR[0] - location2[0]) +
            Math.abs(locationR[1] - location2[1])
        ) {
          answer.push("R");
          locationR = [0, 1];
        } else if (
          Math.abs(locationL[0] - location2[0]) +
            Math.abs(locationL[1] - location2[1]) ===
          Math.abs(locationR[0] - location2[0]) +
            Math.abs(locationR[1] - location2[1])
        ) {
          if (hand === "right") {
            answer.push("R");
            locationR = [0, 1];
          } else {
            answer.push("L");
            locationL = [0, 1];
          }
        } else {
          answer.push("L");
          locationL = [0, 1];
        }
        break;
      case 5:
        if (
          Math.abs(locationL[0] - location5[0]) +
            Math.abs(locationL[1] - location5[1]) >
          Math.abs(locationR[0] - location5[0]) +
            Math.abs(locationR[1] - location5[1])
        ) {
          answer.push("R");
          locationR = [1, 1];
        } else if (
          Math.abs(locationL[0] - location5[0]) +
            Math.abs(locationL[1] - location5[1]) ===
          Math.abs(locationR[0] - location5[0]) +
            Math.abs(locationR[1] - location5[1])
        ) {
          if (hand === "right") {
            answer.push("R");
            locationR = [1, 1];
          } else {
            answer.push("L");
            locationL = [1, 1];
          }
        } else {
          answer.push("L");
          locationL = [1, 1];
        }
        break;
      case 8:
        if (
          Math.abs(locationL[0] - location8[0]) +
            Math.abs(locationL[1] - location8[1]) >
          Math.abs(locationR[0] - location8[0]) +
            Math.abs(locationR[1] - location8[1])
        ) {
          answer.push("R");
          locationR = [2, 1];
        } else if (
          Math.abs(locationL[0] - location8[0]) +
            Math.abs(locationL[1] - location8[1]) ===
          Math.abs(locationR[0] - location8[0]) +
            Math.abs(locationR[1] - location8[1])
        ) {
          if (hand === "right") {
            answer.push("R");
            locationR = [2, 1];
          } else {
            answer.push("L");
            locationL = [2, 1];
          }
        } else {
          answer.push("L");
          locationL = [2, 1];
        }
        break;
      case 0:
        if (
          Math.abs(locationL[0] - location0[0]) +
            Math.abs(locationL[1] - location0[1]) >
          Math.abs(locationR[0] - location0[0]) +
            Math.abs(locationR[1] - location0[1])
        ) {
          answer.push("R");
          locationR = [3, 1];
        } else if (
          Math.abs(locationL[0] - location0[0]) +
            Math.abs(locationL[1] - location0[1]) ===
          Math.abs(locationR[0] - location0[0]) +
            Math.abs(locationR[1] - location0[1])
        ) {
          if (hand === "right") {
            answer.push("R");
            locationR = [3, 1];
          } else {
            answer.push("L");
            locationL = [3, 1];
          }
        } else {
          answer.push("L");
          locationL = [3, 1];
        }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    switch (numbers[i]) {
      case 1:
        locationL = [0, 0];
        answer.push("L");
        break;
      case 4:
        locationL = [1, 0];
        answer.push("L");
        break;
      case 7:
        locationL = [2, 0];
        answer.push("L");
        break;
      case 3:
        locationR = [0, 2];
        answer.push("R");
        break;
      case 6:
        locationR = [1, 2];
        answer.push("R");
        break;
      case 9:
        locationR = [2, 2];
        answer.push("R");
      default:
        check(numbers[i], hand);
    }
  }
  return answer.join("");
}
