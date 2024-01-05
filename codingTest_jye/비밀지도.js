function solution(n, arr1, arr2) {
  //배열 선언방법 잘 기억해두자. 빈 배열을 n개 만들어주었다.
  let answer = new Array(n).fill([]);
  //이진수로 바꾸기
  for (let i = 0; i < n; i++) {
    arr1[i] = arr1[i].toString(2);
    arr1[i] = arr1[i].split("");
    arr2[i] = arr2[i].toString(2);
    arr2[i] = arr2[i].split("");
  }

  //비교를 위해 문자열의 길이를 같게 만들어준다
  for (let i = 0; i < n; i++) {
    if (arr1[i].length !== n) {
      while (arr1[i].length < n) {
        arr1[i].unshift("0");
      }
    }
    if (arr2[i].length !== n) {
      while (arr2[i].length < n) {
        arr2[i].unshift("0");
      }
    }
  }

  // answer 넣기
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] === "1" || arr2[i][j] === "1") {
        answer[i] += "#";
      } else {
        answer[i] += " ";
      }
    }
  }
  return answer;
}
