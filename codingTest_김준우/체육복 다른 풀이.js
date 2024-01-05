function solution(n, lost, reserve) {
  let total = [];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    total[i] = 1;
  }
  lost.forEach((data) => (total[data - 1] -= 1));
  reserve.forEach((data) => (total[data - 1] += 1));
  for (let i = 0; i < total.length; i++) {
    if (total[i] === 2 && total[i - 1] === 0) {
      total[i - 1]++;
      total[i]--;
    } else if (total[i] === 2 && total[i + 1] === 0) {
      total[i]--;
      total[i + 1]++;
    }
  }

  for (let i = 0; i < total.length; i++) {
    if (total[i] >= 1) {
      answer++;
    }
  }
  return answer;
}

// 전체 학생을 배열로 만들어 모두 1값을 가지게 함
// 잃어버린 친구들은 요소 -1
// 여별은 +1
// 앞에서 여벌을 체육복을 받을지 뒤에서 받을지 정해주기
// 다 나누어 준 다음 배열의 요소의 값이 1이상인 수를 구해서 리턴해주기
