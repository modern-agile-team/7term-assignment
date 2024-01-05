function solution(record) {
  const uidName = {};
  const result = [];
  for (let str of record) {
    recordArr = str.split(" ");
    switch (recordArr[0]) {
      case "Enter":
        result.push(recordArr[1] + "님이 들어왔습니다.");
        uidName[recordArr[1]] = recordArr[2];
        break;
      case "Leave":
        result.push(recordArr[1] + "님이 나갔습니다.");
        break;
      case "Change":
        uidName[recordArr[1]] = recordArr[2];
        break;
    }
  }
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].replace(
      result[i].split("님")[0],
      uidName[result[i].split("님")[0]]
    );
  }
  return result;
}
