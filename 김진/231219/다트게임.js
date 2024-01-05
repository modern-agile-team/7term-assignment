function solution(dartResult) {
    let scoreArr = [];
    let resultArr = [];
    let num = '' ;
    
    for (let i = 0; i < dartResult.length; i++) { //배열로 나누기 위한 for문
      if (!isNaN(dartResult[i])) {
        num += dartResult[i];
      } else {
        scoreArr.push(num);
        scoreArr.push(dartResult[i]);
        num = '';
      }
    }
    scoreArr = scoreArr.filter(Boolean); //공백 없이 배열을 반환
    
    for (let i = 0; i < scoreArr.length; i++) {
      if (scoreArr[i] === 'S') { //S 이면 1제곱
        resultArr.push(scoreArr[i-1]);
      }
      else if (scoreArr[i] === 'D') {
        resultArr.push(scoreArr[i-1] * scoreArr[i-1]); //D 이면 2제곱
      }
      else if (scoreArr[i] === 'T') {
        resultArr.push(scoreArr[i-1] * scoreArr[i-1] * scoreArr[i-1]); //T 이면 3제곱
      }
      else if (scoreArr[i] === '*') {
        resultArr[resultArr.length-1] = resultArr[resultArr.length-1] * 2;
        resultArr[resultArr.length-2] = resultArr[resultArr.length-2] * 2; //*는 중첩이 가능
      }
      else if (scoreArr[i] === '#') {
        resultArr[resultArr.length-1] = resultArr[resultArr.length-1] * (-1); //# 이면 마이너스
      }
    }
    return resultArr.reduce((a, b) => a + Number(b), 0) //resultArr 합계
  }​