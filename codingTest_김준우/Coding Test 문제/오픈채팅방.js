function solution(record) {
    let key = [];
    let answer = [];
    let idNick = {};
    for (let i = 0; i < record.length; i++) {
      answer.push(record[i].split(" "));
    }
    answer.forEach((element) => {
      if (element[2] === undefined){
      }
      else{
      idNick[element[1]] = element[2];
      }
    });
    for (let i = 0; i < record.length; i++) {
      if (record[i].includes("Enter")) {
        key.push(idNick[answer[i][1]] +"님이 들어왔습니다.");
      }
      else if (record[i].includes("Leave")) {
        key.push(idNick[answer[i][1]] +"님이 나갔습니다.");
      }
    } return key;
  }
 
  