//강의중에 생각해보니까 대단히 간단하게 풀수 있다는 생각이 들었음
//애초에 둘다 정렬시키고 if문으로 서로 비교만시키면 끝나는 간단한 문제임
//이렇게 하면 for문과 if문을 각각 하나만 사용하게됨 -> 리소스 줄임

function solution(participant, completion) {
  let answer = '';

  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] != completion[i]) {
      answer = participant[i];
      break;
    }
  }
  return answer;
}
//dd
