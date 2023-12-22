// 아이디 추천하는 프로그램
// 아이디 길이 3~15자 이하
// 알파벳 소문자 / 숫자 / 빼기(-) / 밑줄(_) / 마침표(.)
// 마침표(.)는 처음과 끝에 사용할 수 없으며 연속으로 안된다.

function solution(new_id) {
    let answer = "";
    answer = new_id.toLowerCase();
    const regex = /[^a-z0-9\-\_\.]+/g;
    if (regex.test(answer)) {
      answer = answer.replace(regex, "");
    }
    console.log(answer)
    const regex1 = /[\.]{2,}/g;
    if (regex1.test(answer)) {
      answer = answer.replace(regex1, ".");
    }
    const regex2 = /^\./;
    const regex3 = /\.$/;
    if (regex2.test(answer) || regex3.test(answer)) {
      answer = answer.replace(regex2, "");
      answer = answer.replace(regex3, "");
    } console.log(answer)
    if (answer.length === 0) {
      answer += "a";
    }
    answer = answer.split("");
    if (answer.length >= 16) {
      answer.splice(15, answer.length);
      if (answer[14] === ".") {
        answer.splice(14, 1);
      }
    }
    if (answer.length <= 2) {
      console.log(answer)
      if (answer.length === 2) {
        answer.push(answer[1]);
      }
      if (answer.length === 1) {
        answer.push(answer[0]);
        answer.push(answer[1]);
      } 
    } answer = answer.join("");
    return answer;
  }
  
  // 1. 대문자 -> 소문자
  // 2. 소문자 / 숫자 / - / 밑줄 / 마침표를 제외한 모든 문자 제거
  // 3. 마침표 두 번 이상 연속으로 쓴 하나로 바꾼다
  // 4. 마침표 처음이랑 끝에는 들어갈 수 없다
  // 5. 빈 문자열이면 a대입
  // 6. 16자 이상이면 처음 15자리만 남기고 삭제 단, 마침표가 가장 맨 뒤로 오면 삭제
  // 7. 아이디 길이 2자리 이하이면 아이디의 미자막 문자를 끝에 붙인다
  