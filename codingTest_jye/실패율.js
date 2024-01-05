function solution(N, stages) {
  let answer = [];
  let challenge = {}; //몇라운드에 몇명이 도전했는지 구현한 객체 키는 라운드 밸류는 인원
  let fail = {}; //몇라운드에 몇명이 탈락했는지 구현한 객체 키는 라운드고 밸류는 인원
  //clear, fail 객체 초기화
  for (let i = 1; i <= N; i++) {
    challenge[i] = 0;
    fail[i] = 0;
  }
  //도전했는데 n번째 스테이지 클리어 못한사람 구하기
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= stages.length; j++) {
      if (stages[j] === i) {
        fail[i]++;
      }
    }
  }
  //n번째 스테이지 도전자 구하기
  for (let i = 1; i <= N; i++) {
    for (let j = 0; j <= stages.length; j++) {
      if (stages[j] >= i) {
        challenge[i]++;
      }
    }
  }
  //만들어진 수들로 실패율을 구하자
  for (let i = 1; i <= N; i++) {
    challenge[i] = fail[i] / challenge[i];
  }
  //넣어진 실패율을 정렬시키고 실패율이 같다면 작은 스테이지부터 정렬시켜서 answer에 넣어주자.
  //entries는 객체를 [key, value]로 반환시킨다. 이거의 인덱스 1번째를 sort시키면 배열이 내림차순이 된다.
  challenge = Object.entries(challenge).sort((a, b) => b[1] - a[1]);

  //이제 키값만 추출해서
  for (let i = 0; i < challenge.length; i++) {
    answer.push(challenge[i][0]); //
  }
  //반환하면 끝
  return answer.map(Number);
}
