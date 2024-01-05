function solution(n, arr1, arr2) {
  conversion = (arr) => {
    const resultArr = [];
    arr = arr.map((v) => v.toString(2));
    arr = arr.map((v) => (v.length < n ? v.padStart(n, "0") : v));
    for (let i = 0; i < arr.length; i++) {
      let value = "";
      for (let j = 0; j < n; j++) {
        if (arr[i][j] === "0") {
          value += " ";
        } else {
          value += "#";
        }
      }
      resultArr.push(value);
    }
    return resultArr;
  };

  arr1 = conversion(arr1);
  arr2 = conversion(arr2);

  const result = [];
  for (let i = 0; i < n; i++) {
    let arrAl1 = arr1[i].split("");
    let arrAl2 = arr2[i].split("");
    let value = "";
    for (let j = 0; j < n; j++) {
      if (arrAl1[j] === " " && arrAl2[j] === " ") {
        value += " ";
      } else {
        value += "#";
      }
    }
    result.push(value);
  }
  return result;
}
