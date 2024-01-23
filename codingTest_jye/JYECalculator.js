//메인함수

function main() {
  let msg = document.getElementById("msg").value;

  if (exit(msg)) {
    window.close();
  } else {
    msg = noSpacing(msg);
    if (judgeError(msg)) {
      alert("정상적인 형태로 작성해 주세요");
      return 0;
    }

    msg = toArray(msg);
    msg = judge1(msg);
    msg = judge2(msg);
    document.getElementById("result").innerHTML = msg[0];
    alert("메인함수 종료완료");
  }
}

//exit 누르면 구현 기능
function exit(msg) {
  if (msg === "exit") {
    if (confirm("정말로 종료하시겠습니까?")) {
      alert("종료됨 수고요");
      return true;
    } else {
      alert("종료되지 않았습니다.");
    }
  }
}
//입력값 이상한것들 판단
function judgeError(msg) {
  if (/[^0-9-+*/.]|[*-/+]{2,}|[-*+/.]$|^[-*+/.]/.test(msg)) {
    //0~9와 -+*/.말고 다른것들 들어갔거나 부호가 두번이상 연속했을 경우 true를 반환한다. 한쪽 끝에 부호나 점 들어가있으면 안됨
    return true;
  }
  return false;
}
//공백 제거 함수
function noSpacing(msg) {
  msg = msg.replace(/ /g, "");
  return msg;
}
//배열화
function toArray(msg) {
  msg = msg.match(/[0-9.]{1,}|[-+*/]/g);
  return msg;
}
//곱하기 나누기에 대한걸 판단하고 최종 값을 반환하는 함수
function judge1(msg) {
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] === "*") {
      msg = mul(i, msg);
      i = 0;
    } else if (msg[i] === "/") {
      msg = div(i, msg);
      i = 0;
    }
  }
  return msg;
}
//덧셈 뺄셈 확인 및 최종값 반환
function judge2(msg) {
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] === "+") {
      msg = add(i, msg);
      i = 0;
    } else if (msg[i] === "-") {
      msg = sub(i, msg);
      i = 0;
    }
  }
  return msg;
}
//곱하기 둘째자리까지만
function mul(i, msg) {
  let key = 0;
  key = Number((Number(msg[i - 1]) * Number(msg[i + 1])).toFixed(2));
  msg.splice(i, 2);
  msg[i - 1] = key;
  return msg;
}
//나누기 둘째자리까지만
function div(i, msg) {
  let key = 0;
  key = Number((Number(msg[i - 1]) / Number(msg[i + 1])).toFixed(2));
  msg.splice(i, 2);
  msg[i - 1] = key;
  return msg;
}
//더하기
function add(i, msg) {
  let key = 0;
  key = Number((Number(msg[i - 1]) + Number(msg[i + 1])).toFixed(2));
  msg.splice(i, 2);
  msg[i - 1] = key;
  return msg;
}
//빼기
function sub(i, msg) {
  let key = 0;
  key = Number((Number(msg[i - 1]) - Number(msg[i + 1])).toFixed(2));
  msg.splice(i, 2);
  msg[i - 1] = key;
  return msg;
}
//0입력
function input0() {
  document.getElementById("msg").value += 0;
}

//1입력
function input1() {
  document.getElementById("msg").value += 1;
}
//2입력
function input2() {
  document.getElementById("msg").value += 2;
}
//3입력
function input3() {
  document.getElementById("msg").value += 3;
}
//4입력
function input4() {
  document.getElementById("msg").value += 4;
}
//5입력
function input5() {
  document.getElementById("msg").value += 5;
}
//6입력
function input6() {
  document.getElementById("msg").value += 6;
}
//7입력
function input7() {
  document.getElementById("msg").value += 7;
}
//8입력
function input8() {
  document.getElementById("msg").value += 8;
}
//9입력
function input9() {
  document.getElementById("msg").value += 9;
}
//+입력
function inputAdd() {
  document.getElementById("msg").value += "+";
}
//*입력
function inputMul() {
  document.getElementById("msg").value += "*";
}
// /입력
function inputDiv() {
  document.getElementById("msg").value += "/";
}
//-입력
function inputSub() {
  document.getElementById("msg").value += "-";
}
// 공백 입력
function inputSpace() {
  document.getElementById("msg").value += " ";
}
// . 입력
function inputDot() {
  document.getElementById("msg").value += ".";
}
