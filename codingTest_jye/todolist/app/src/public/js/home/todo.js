"use strict";
//number의 값은 변동적이어야함.
//무슨 뜻이냐면 데이터 베이스에서 최적화(여기서는 이전에 작업했던 번호들을 앞으로 땡겨주는 일을 말함)를 통해 마지막 번호를 받고
//그 이후부터 number을 시작해주면 됨
//사용자가 사이트를 나갈때 데이터베이스에 있는 데이터들을 앞쪽으로 땡겨주고 사용자가 들어올 때 이후의 번호부터 시작하면 됨.
let number = 0;
let obj1 = {};

fetch("/lists")
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    const box = document.getElementById("box");
    if (result[0]) {
      for (let i = 0; i < result.length; i++) {
        let key = result[i].id;
        if (result[i].is_check === 1) {
          const newP = document.createElement("p");
          newP.innerHTML = `<input type="checkbox" id = "${key}checkbox" onclick="checkbox(${key})" checked>
        <span id="${key}span"style="text-decoration: line-through; color: #797979;">${result[i].description}</span><input type='button' value='fix' id="${key}fix" onclick='fix(${key})' style="display: none;"><input type='button' " value='delete' onclick='remove(this, ${key})'>`;
          box.append(newP);
        } else {
          const newP = document.createElement("p");
          newP.innerHTML = `<input type="checkbox" id = "${key}checkbox" onclick="checkbox(${key})">
        <span id="${key}span">${result[i].description}</span><input type='button' value='fix' id="${key}fix" onclick='fix(${key})'><input type='button' " value='delete' onclick='remove(this, ${key})'>`;
          box.append(newP);
        }
      }
      return (number = result[result.length - 1].id + 1);
    } else return (number = 1);
  });

function add() {
  const input1 = document.getElementById("input").value;
  const box = document.getElementById("box");
  const newP = document.createElement("p");

  if (!input1) {
    alert("좋은말로 할때 입력값을 입력하도록.");
    return 0;
  }
  newP.innerHTML = `<input type="checkbox" id = "${number}checkbox" onclick="checkbox(${number})">
      <span id="${number}span">${input1}</span><input type='button' value='fix' id="${number}fix" onclick='fix(${number})'><input type='button'" value='delete' onclick='remove(this, ${number})'>`;
  box.appendChild(newP);

  const req = {
    id: number,
    description: input1,
  };

  fetch("/lines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("생성 중 에러 발생");
    });

  document.getElementById("input").value = "";

  return number++;
}

function remove(obj, i) {
  const box = document.getElementById("box");
  box.removeChild(obj.parentNode);

  const req = { id: i };

  fetch("/lines", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("생성 중 에러 발생");
    });
}

function fix(i) {
  // document.getElementById(`${i}fix`).type = "text";
  // document.getElementById(`${i}fix`).value = string;
  // console.log(document.getElementById(`${i}span`));

  let span = document.getElementById(`${i}span`);
  let input = document.createElement("input");
  let fix = document.getElementById(`${i}fix`);

  input.type = "text";
  input.value = span.textContent;
  span.parentNode.replaceChild(input, span);
  input.id = `${i}input`;

  fix.value = "완료";
  fix.setAttribute("onclick", `fixed(${i})`);
  // const newString = `<input type="checkbox"><input type = "text" value="${string}" autofocus><input type='button' value='완료' onclick='fixed(${i})'><input type='button' value='삭제' onclick='remove(this)'>`;
  // document.getElementById(`${i}fix`) = newString.innerHTML;
}

function fixed(i) {
  let input = document.getElementById(`${i}input`);
  let span = document.createElement("span");
  let fix = document.getElementById(`${i}fix`);

  if (!input.value) {
    alert("입력값 입력하라고");
    return 0;
  }

  span.textContent = input.value;
  span.id = `${i}span`;

  fix.value = "fix";
  fix.setAttribute("onclick", `fix(${i})`);

  input.parentNode.replaceChild(span, input);

  const req = {
    description: span.innerText,
    id: i,
  };

  fetch("/descriptions", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("생성 중 에러 발생");
    });
  checkbox(i);
}

function checkbox(i) {
  //div로 된놈 불러옴
  const span = document.getElementById(`${i}span`);
  const fix = document.getElementById(`${i}fix`);
  const checkbox = document.getElementById(`${i}checkbox`);
  let check = 0; //이걸로 체크된거 표시

  console.log(checkbox.checked);

  if (document.getElementById(`${i}input`)) {
    return 0;
  } else {
    if (checkbox.checked === false) {
      check = 0;
      span.style.textDecoration = "";
      //취소선 제거하기
      span.style.color = "";
      //원래 색갈 복원
      fix.style.display = "";
      //수정버튼 보여주기
    } else if (checkbox.checked === true) {
      check = 1;
      span.style.textDecoration = "line-through";
      //취소선 긋기
      span.style.color = "#797979";
      //회색으로 바꾸기
      fix.style.display = "none";
      //수정버튼 숨기기
    }
  }
  const req = {
    id: i,
    isCheck: check,
  };

  fetch("/checkboxes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error("생성 중 에러 발생");
    });
}
