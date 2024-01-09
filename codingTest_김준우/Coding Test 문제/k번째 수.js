function solution(array, commands) {
  let i;
  let j;
  let k;
  let ArrNum = commands.length;
  let answer = 0;
  const arr = new Array();
  for (let a = 0; a < ArrNum; a++) {
    i = commands[a][0];
    j = commands[a][1];
    k = commands[a][2];
    let array1 = array.slice(i - 1, j);
    array1 = array1.sort((a, b) => a - b);
    answer = array1[k - 1];
    arr[a] = answer;
  }

  return arr;
}
