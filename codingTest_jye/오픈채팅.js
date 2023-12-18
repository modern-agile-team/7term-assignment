// 각 단어는 알파벳 대문자, 소문자, 숫자로 이루어짐
// 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
// 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
// 유저 아이디를 키로, 닉네임을 밸류로한 객체를 생성해주면 될듯하다.
function solution(record) {
  let answer = [];
  let arr = {};
  //입력받은 것들의 첫번째는 무조건 명령어가 오고 두번째 세번째는 각각 유저아이디, 닉네임이 온다. Leave만 3번째 인수(닉네임)가 오지않음
  //명령어는 Enter, Leave, Change 세가지 뿐이다.
  //문제상 어쩔수 없이 배열 내부 전체를 읽어보는 방법밖에는 없다. for문으로 돌려가면서 하면될듯하다.
  for (let i = 0; i < record.length; i++) {
    switch (record[i].split(" ")[0]) {
      case "Enter":
        arr[record[i].split(" ")[1]] = record[i].split(" ")[2];
        break;
      case "Change":
        arr[record[i].split(" ")[1]] = record[i].split(" ")[2];
    }
  }

  //일단 객체를 먼저 만들어주고 다 끝난 후에 Enter Leave에 따른 최종 결과값을 표현해주어야한다.
  for (let i = 0; i < record.length; i++) {
    switch (record[i].split(" ")[0]) {
      case "Enter":
        answer.push(`${arr[record[i].split(" ")[1]]}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${arr[record[i].split(" ")[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

//result ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
