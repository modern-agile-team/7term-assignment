function solution(record) {
  let uidName = {};
  let result = [];
  for (let str of record) {
    recordArr = str.split(" ");
    switch (recordArr[0]) {
      case "Enter":
        uidName[recordArr[1]] = recordArr[2];
        break;
      case "Change":
        uidName[recordArr[1]] = recordArr[2];
    }
  }
  for (let i = 0; i < record.length; i++) {
    switch (record[i][0]) {
      case "E":
        result.push(`${uidName[record[i].split(" ")[1]]}님이 들어왔습니다.`);
        break;
      case "L":
        result.push(`${uidName[record[i].split(" ")[1]]}님이 나갔습니다.`);
    }
  }
  return result;
}
