// 한 뱐의 길이 n
// 지도 1 === arr1
// 지도 2 === arr2
// 2진수 값을 배열로
// # === 1, # === 0 으로 2진수 표현

function solution(n, arr1, arr2) {
    let answer = [];
    let newArr1 = [];
    let newArr2 = [];
    let total = [];
    let result = [];
    for (let i = 0; i < n; i++) {
      newArr1[i] = arr1[i].toString(2);
      newArr2[i] = arr2[i].toString(2);
    }
    for (let i = 0; i < n; i++) {
      if (newArr1[i].length < n) {
        newArr1[i] = String(newArr1[i]).padStart(n, "0");
      }
    }
    for (let i = 0; i < n; i++) {
      if (newArr2[i].length < n) {
        newArr2[i] = String(newArr2[i]).padStart(n, "0");
      }
    }
    for (let i = 0; i < n; i++) {
      total[i] = Number(newArr1[i]) + Number(newArr2[i]);
    }
    for (let i = 0; i < n; i++) {
      if (String(total[i]).length < n) {
        total[i] = String(total[i]).padStart(n, "0");
      }
    }
    for (let i = 0; i < n; i++) {
      answer.push(String(total[i]).split(""));
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (answer[i][j] === "1" || answer[i][j] === "2") {
          answer[i].splice(j, 1, "#");
        } else if (answer[i][j] === "0") {
          answer[i].splice(j, 1, " ");
        }
      }
    }
    for (let i = 0; i < n; i++) {
      result.push(answer[i].join(""));
    }
    return result;
  }
  