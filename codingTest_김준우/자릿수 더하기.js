function solution(n) {
  const strN = String(n);
  let splitN = strN.split("");
  let answer = 0;
  for (let i = 0; i < splitN.length; i++) {
    answer += Number(splitN[i]);
  }
  return answer;
}
