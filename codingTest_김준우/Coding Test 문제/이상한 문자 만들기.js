function solution(s) {
  let splitS = s.split(" "); // ['try','hello','world']
  let joinS = "";
  let result = [];
  let answer = [];
  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < splitS[i].length; j++) {
      result +=
        j % 2 === 0 ? splitS[i][j].toUpperCase() : splitS[i][j].toLowerCase(); //TrY
    }
    answer.push(result);
    result = "";
  }
  joinS = answer.join(" ");
  return joinS;
}

// s는 한 개 이상의 단어 각 단어는 하나 이상의 공백문자로 구분
// 각 단어의 짝수번째 알파벳은 대문자로 홀수번째는 소문자로
// 첫 번째 글자는 짝수로
