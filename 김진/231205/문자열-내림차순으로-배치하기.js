function solution(s) {
    let answer = [];
    for (let i=0;i<s.length;i++) {
      answer.push(s[i]);
    }
    return answer.sort().reverse().join('');
  }