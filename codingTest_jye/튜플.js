// 이건 걍 길이가 가장 긴 놈 찾으면 될것같다.
// 배열로 담아서 길이가 가장 긴 걸 반환시키면 될듯?
//문자열.split(정규식) 요놈 써먹으면 좋을듯
function solution(s) {
  let answer = [];
  let key;
  s = s
    .replace(/^{|}$/g, "") //양쪽 괄호 풀어주고
    .match(/\{[^}]+\}/g); //   \{[^}]+\} 괄호포함 괄호 안의 것들만 추출
  //길이별로 정렬
  s = s.sort((a, b) => a.length - b.length);
  //이제 베열에 넣음
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].match(/[0-9]{1,6}/g);
  }
  //배열 내부 값 오름차순 정렬
  for (let i = 0; i < s.length; i++) {
    s[i].sort((a, b) => a - b);
  }
  //첫번째 값 넣어줌
  answer.push(s[0][0]);
  //중복되지 않으면 그 값을 넣어라
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (i < s.length - 1) {
        //중복되지 않으면 그 값을 넣어라
        if (s[i][j] !== s[i + 1][j]) {
          answer.push(s[i + 1][j]);
          break;
        } //위 조건에 해당안되면 마지막 값을 넣어라
        if (j === s[i].length - 1) {
          answer.push(s[i + 1][j + 1]);
        }
      }
    }
  }
  //마지막으로 숫자화 시키면 완성
  for (let i = 0; i < s.length; i++) {
    answer[i] = Number(answer[i]);
  }
  return answer;
}
