// 실패율 === 도달은 했는데 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어
// 전체 스테이지의 개수 N
// 게임을 이용하는 사용자자 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
// 실패율이 높은 스테이지부터 내림차순으로 return
// 실패율이 같으면 작은 번호의 스테이지가 먼저 오도록 하면 됨
// 스테이지에 도달한 유저가 없으면 해당 스테이지의 실패율은 0

function solution(N, stages) {
  let count = [];
  let total = 0;
  let failRate = [];
  let big = 0;
  let answer = [];
  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) {
        total++;
      }
    }
    count.push(total);
    total = 0;
  }
  for (let i = 0; i < count.length; i++) {
    failRate.push(count[i] / stages.length);
    stages.length -= count[i];
    if (stages.length === 0 && i < count.length) {
      for (let j = i + 1; j < count.length; j++) {
        failRate.push(0);
      }
      break;
    }
  }
  for (let j = 0; j < failRate.length; j++) {
    for (let i = 0; i < failRate.length; i++) {
      big = Math.max(...failRate);
      if (big === -1) {
        break;
      }
      if (failRate[i] === big) {
        answer.push(i + 1);
        failRate.splice(i, 1, -1);
        break;
      }
    }
  }
  return answer;
}
