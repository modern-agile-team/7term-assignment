function solution(participant, completion, answer = "") {
  const players = {};
  for (i of participant) {
    //객체 만들어주기
    players[i] = 0;
  }
  for (i of participant) {
    //동일한 객체 찾기
    players[i] += 1;
    if (players[i] === 1) {
      answer = i;
    }
  }
  for (i of completion) {
    //없는 이름 찾기
    players[i] -= 1;
  }
  for (i in players) {
    //i 가 0 이 아닌 이름 찾기
    if (players[i]) {
      return i;
    }
  }
  return answer;
}
