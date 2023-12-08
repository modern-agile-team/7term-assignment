//배열안의 배열에 접근해서 추출하는게 핵심이 될것같다. 즉 2차원 배열에서 값을 추출해야한다.
//1번 자르고 2번 정렬하고 3번 뽑아내기. 과정은 이렇다.
//2차원 배열이니까 i, j로 for문을 두개 이용해서 값에 접근해보자.

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const key = []; //key가 for문이 돌아가면서 계속 초기화됨

    for (let j = commands[i][0]; j <= commands[i][1]; j++) {
      key.push(array[j - 1]); //key에 해당 값 넣어주고 j-1의 이유는 index가 0번부터 시작하니까
    }
    key.sort((a, b) => a - b); //2번 과정인 key를정렬시켜주고
    answer.push(key[commands[i][2] - 1]); //3번 과정인 answer에 밀어넣기해준다.
    //-1을 해준 이유는 위와 동일.
  }
  //최종적으로 answer에 들어간 값들을 반환해준다.
  return answer;
} //pr
