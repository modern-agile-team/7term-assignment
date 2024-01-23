function solution(numbers, hand) {
    let answer = [];
    let Llocation = [];
    let Rlocation = [];
    let Ldistance = 0;
    let Rdistance = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === Rlocation[Rlocation.length - 1]) {
        answer.push("R");
        Rlocation.push(numbers[i]);
        continue;
      } else if (numbers[i] === Llocation[Llocation.length - 1]) {
        answer.push("L");
        Llocation.push(numbers[i]);
        continue;
      }
      if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
        answer.push("L");
        Llocation.push(numbers[i]);
      }
      if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
        answer.push("R");
        Rlocation.push(numbers[i]);
      }
      if (numbers[i] === 2) {
        if (
          Llocation[Llocation.length - 1] === 1 ||
          Llocation[Llocation.length - 1] === 5
        ) {
          Ldistance = 1;
        } else if (
          Llocation[Llocation.length - 1] === 4 ||
          Llocation[Llocation.length - 1] === 8
        ) {
          Ldistance = 2;
        } else if (
          Llocation[Llocation.length - 1] === 0 ||
          Llocation[Llocation.length - 1] === 7
        ) {
          Ldistance = 3;
        } else {
          Ldistance = 4;
        }
        if (
          Rlocation[Rlocation.length - 1] === 3 ||
          Rlocation[Rlocation.length - 1] === 5
        ) {
          Rdistance = 1;
        } else if (
          Rlocation[Rlocation.length - 1] === 6 ||
          Rlocation[Rlocation.length - 1] === 8
        ) {
          Rdistance = 2;
        } else if (
          Rlocation[Rlocation.length - 1] === 0 ||
          Rlocation[Rlocation.length - 1] === 9
        ) {
          Rdistance = 3;
        } else {
          Rdistance = 4;
        }
        if (Ldistance > Rdistance) {
          answer.push("R");
          Rlocation.push(numbers[i]);
        } else if (Ldistance < Rdistance) {
          answer.push("L");
          Llocation.push(numbers[i]);
        } else {
          if (hand === "right") {
            answer.push("R");
            Rlocation.push(numbers[i]);
          }
          if (hand === "left") {
            answer.push("L");
            Llocation.push(numbers[i]);
          }
        }
      }
      if (numbers[i] === 5) {
        if (
          Llocation[Llocation.length - 1] === 2 ||
          Llocation[Llocation.length - 1] === 4 ||
          Llocation[Llocation.length - 1] === 8
        ) {
          Ldistance = 1;
        } else if (
          Llocation[Llocation.length - 1] === 1 ||
          Llocation[Llocation.length - 1] === 7 ||
          Llocation[Llocation.length - 1] === 0
        ) {
          Ldistance = 2;
        } else {
          Ldistance = 3;
        }
        if (
          Rlocation[Rlocation.length - 1] === 2 ||
          Rlocation[Rlocation.length - 1] === 6 ||
          Rlocation[Rlocation.length - 1] === 8
        ) {
          Rdistance = 1;
        } else if (
          Rlocation[Rlocation.length - 1] === 3 ||
          Rlocation[Rlocation.length - 1] === 9 ||
          Rlocation[Rlocation.length - 1] === 0
        ) {
          Rdistance = 2;
        } else {
          Rdistance = 3;
        }
        if (Ldistance > Rdistance) {
          answer.push("R");
          Rlocation.push(numbers[i]);
        } else if (Ldistance < Rdistance) {
          answer.push("L");
          Llocation.push(numbers[i]);
        } else {
          if (hand === "right") {
            answer.push("R");
            Rlocation.push(numbers[i]);
          }
          if (hand === "left") {
            answer.push("L");
            Llocation.push(numbers[i]);
          }
        }
      }
      if (numbers[i] === 8) {
        if (
          Llocation[Llocation.length - 1] === 0 ||
          Llocation[Llocation.length - 1] === 5 ||
          Llocation[Llocation.length - 1] === 7
        ) {
          Ldistance = 1;
        } else if (
          Llocation[Llocation.length - 1] === 2 ||
          Llocation[Llocation.length - 1] === 4 ||
          Llocation.length === 0
        ) {
          Ldistance = 2;
        } else {
          Ldistance = 3;
        }
        if (
          Rlocation[Rlocation.length - 1] === 0 ||
          Rlocation[Rlocation.length - 1] === 5 ||
          Rlocation[Rlocation.length - 1] === 9
        ) {
          Rdistance = 1;
        } else if (
          Rlocation[Rlocation.length - 1] === 2 ||
          Rlocation[Rlocation.length - 1] === 6 ||
          Rlocation.length === 0
        ) {
          Rdistance = 2;
        } else {
          Rdistance = 3;
        }
        if (Ldistance > Rdistance) {
          answer.push("R");
          Rlocation.push(numbers[i]);
        } else if (Ldistance < Rdistance) {
          answer.push("L");
          Llocation.push(numbers[i]);
        } else {
          if (hand === "right") {
            answer.push("R");
            Rlocation.push(numbers[i]);
          }
          if (hand === "left") {
            answer.push("L");
            Llocation.push(numbers[i]);
          }
        }
      }
      if (numbers[i] === 0) {
        if (Llocation[Llocation.length - 1] === 8 || Llocation.length === 0) {
          Ldistance = 1;
        } else if (
          Llocation[Llocation.length - 1] === 5 ||
          Llocation[Llocation.length - 1] === 7
        ) {
          Ldistance = 2;
        } else if (
          Llocation[Llocation.length - 1] === 2 ||
          Llocation[Llocation.length - 1] === 4
        ) {
          Ldistance = 3;
        } else {
          Ldistance = 4;
        }
        if (Rlocation[Rlocation.length - 1] === 8 || Rlocation.length === 0) {
          Rdistance = 1;
        } else if (
          Rlocation[Rlocation.length - 1] === 5 ||
          Rlocation[Rlocation.length - 1] === 9
        ) {
          Rdistance = 2;
        } else if (
          Rlocation[Rlocation.length - 1] === 2 ||
          Rlocation[Rlocation.length - 1] === 6
        ) {
          Rdistance = 3;
        } else {
          Rdistance = 4;
        }
        if (Ldistance > Rdistance) {
          answer.push("R");
          Rlocation.push(numbers[i]);
        } else if (Ldistance < Rdistance) {
          answer.push("L");
          Llocation.push(numbers[i]);
        } else {
          if (hand === "right") {
            answer.push("R");
            Rlocation.push(numbers[i]);
          }
          if (hand === "left") {
            answer.push("L");
            Llocation.push(numbers[i]);
          }
        }
      }
    }
    let key = answer.join("");
    return key;
  }
  // 1,4,7인 경우는 무조건 L
  // 3,6,9인 경우는 무조건 R
  // 2,5,8,0인 경우는 거리를 생각하며 풀어야 함
  // 같은 거리인 경우 자기 손잡이에 맞게 들어가야 함
  // 거리를 알아야 한다 ? 이것이 가장 중요한 부분
  // 거리가 같은면 hand를 이용
  
  // 왼손과 오른손의 엄지손가락만 이용해서 숫자만 입력
  // 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
  // 1 / 4 / 7을 입력할 때는 왼손 엄지손가락을 사용합니다
  // 3 / 6 / 9을 입력할 때는 오른손 엄손이용
  // 가운데 열의 4개의 숫자 2 5 8 0 을 입력할 때는 더 가까운 손가락 이용 근데 거리가 같다? 자기 손잡이 이용
  // 순서대로 누를 번호가 담긴 배열 numbers 왼 오 손잡이인지 문자열은 hand
  // return은 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return  