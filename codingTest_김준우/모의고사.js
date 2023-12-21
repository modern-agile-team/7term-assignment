// 수포자 1 2 3 가 찍는 방식이 정해져 있다.
// 가장 많이 맞춘 사람을 배열에 넣어 리턴한다
// 가장 많이 맞춘 사람이 두 명 이상인 경우 오름차순으로 정렬해서 리턴한다.
// 수포자 1 : 1 2 3 4 5 / 1 2 3 4 5 / 1 2 3 4 5
// 수포자 2 : 2 1 2 3 2 4 2 5 / 2 1 2 3 2 4 2 5
// 수포자 3 : 3 3 1 1 2 2 4 4 5 5 / 3 3 1 1 2 2 4 4 5 5
// 정답지 answers -> 배열
function solution(answers) {
    let supo1 = [1, 2, 3, 4, 5];
    let supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let key = [0, 0, 0];
    let value = [];
    for(let i =0; i< answers.length; i++) {
      if(supo1[i%supo1.length] === answers[i]) {
        key[0]++;
      }
    }
    for(let i =0; i< answers.length; i++) {
      if(supo2[i%supo2.length] === answers[i]) {
        key[1]++;
      }
    }
    for(let i =0; i< answers.length; i++) {
      if(supo3[i%supo3.length] === answers[i]) {
        key[2]++;
      }
    }
     let big = Math.max(...key);
    for (let i = 0; i < 3; i++) {
      if(key[i] === big){
      value.push(i+1);
      }
    }
   return value;
  }
  // 수포자들의 답을 배열에 넣는다
  // for문을 돌며 같은 값을 찾아 몇개 인지 확인
  // 서로 비교해서 가장 많은 수를 가진 사람을 찾는다
  // 배열에 넣어 리턴한다
  // 만역 두 명이상 이면 오름차순으로 바꿔서 리턴
  