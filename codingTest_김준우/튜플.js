// 셀 수 있는 수량의 열거 또는 어떤 순서를 따르는 요소들의 모음을 튜플이라고 함
// n개의 요소를 가진 튜플을 n-튜플이라고 함
// 중복된 원소가 있을 수 있음
// 원소에 정해진 순서가 있음 원소의 순서가 다르면 다른 튜플임
// 튜플의 원소의 개수는 유한하다

function solution(s) {
    let key = [];
    let sortKey = [];
    let result = [];
    let answer = [];
    answer = s.replace(/^{|}$/g, "");
    answer = answer.replace(/^{|}$/g, "");
    answer = answer.split("},{");
    for (let i = 0; i < answer.length; i++) {
      key.push(answer[i].split(",").map(Number));
    }
    for (let i = 1; i <= key.length; i++) {
      for (let j = 0; j < key.length; j++) {
        if (key[j].length === i) {
          sortKey.push(key[j]);
        }
      }
    }
    for (let i = 0; i < sortKey.length; i++) {
      for(let j =0; j < sortKey[i].length; j++) {
        if (!result.includes(sortKey[i][j])) { // [2]
          result.push(sortKey[i][j]);
        }
      }
    }
    return result;
  }
  