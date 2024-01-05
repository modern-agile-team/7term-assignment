// 다트 게임 3번 기회
// 얻을 수 있는 점수는 0점 10점까지
// S : 1제곱  D : 2제곱 T : 3제곱
// 스타상 * 바로 전에 얻은 점수 두 배 해당 점수 아차상 # 해당 점수 마이너스
// 스타상 첫 번째 기회에 나올 수 있음 첫 번째 점수에 두 배
// 스타상 두 번 4배
// 스타상 아차상 중첩되면 -2배
// S D T 점수마다 하나씩 존재한다
// 스타상 아차상은 점수마다 둘 중 하나만 존재할 수 있음 아닐수도
// 총점수를 반환하는 함수를 작성해라

function solution(dartResult) {
  let answer = 0;
  let total = [];
  console.log(total);
  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        total.push(10 ** 1);
      } else {
        total.push(dartResult[i - 1] ** 1);
      }
    }
    if (dartResult[i] === "D") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        total.push(10 ** 2);
      } else {
        total.push(dartResult[i - 1] ** 2);
      }
    }
    if (dartResult[i] === "T") {
      if (dartResult[i - 2] === "1" && dartResult[i - 1] === "0") {
        total.push(10 ** 3);
      } else {
        total.push(dartResult[i - 1] ** 3);
      }
    }
    if (i < 3) {
      if (dartResult[i] === "*") {
        total[0] = total[0] * 2;
      }
    } else if (i >= 3 && i < 6) {
      if (dartResult[i] === "*") {
        total[0] = total[0] * 2;
        total[1] = total[1] * 2;
      }
    } else {
      if (dartResult[i] === "*") {
        total[1] = total[1] * 2;
        total[2] = total[2] * 2;
      }
    }
    if (i < 3) {
      if (dartResult[i] === "#") {
        total[0] = total[0] * -1;
      }
    } else if (i >= 3 && i < 6) {
      if (dartResult[i] === "#") {
        total[1] = total[1] * -1;
      }
    } else {
      if (dartResult[i] === "#") {
        total[2] = total[2] * -1;
      }
    }
  }
  answer = total[0] + total[1] + total[2];
  return answer;
}
