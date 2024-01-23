function solution(s) {
  if (s.length === 4 || s.length === 6) {
    let splitS = s.split("");
    let answer = true;
    for (let i = 0; i < splitS.length; i++) {
      if (isNaN(splitS[i]) === true) {
        answer = false;
        return answer;
      } else {
        answer = true;
      }
    }
    return answer;
  } else {
    return false;
  }
}
