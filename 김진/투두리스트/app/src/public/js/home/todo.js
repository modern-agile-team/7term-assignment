"use strict";

showList();

const taskInput = document.querySelector("#taskInput"),
  plus = document.querySelector("#plus");

plus.addEventListener("click", plusAdd);

function consoleLog(el) {
  console.log("테스트용 콘솔");
  console.log(el);
}

function madeUl(dbId, dbTask, dbCheck, i) {
  const ul1 = document.createElement("ul");
  ul1.setAttribute("id", "ul");

  const input1 = document.createElement("input");
  input1.setAttribute("type", "checkbox");
  input1.setAttribute("value", dbCheck);
  input1.setAttribute("id", `check${dbId}`);

  const input2 = document.createElement("input");
  input2.setAttribute("type", "text");
  input2.setAttribute("value", dbTask);
  input2.setAttribute("id", `dataTask${dbId}`);

  const button1 = document.createElement("button");
  button1.setAttribute("type", "button");
  button1.setAttribute("id", `edit${dbId}`);
  button1.appendChild(document.createTextNode("수정"));

  const button2 = document.createElement("button");
  button2.setAttribute("type", "button");
  button2.setAttribute("id", `delete${dbId}`);
  button2.appendChild(document.createTextNode("삭제"));

  document.querySelector("#taskList").append(ul1);
  ul1.append(input1, input2, button1, button2);

  return (i = [
    document.querySelector(`#check${dbId}`),
    document.querySelector(`#dataTask${dbId}`),
    document.querySelector(`#edit${dbId}`),
    document.querySelector(`#delete${dbId}`),
  ]);
}

function showList() {
  const a = [];
  fetch("/to-do-list", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        a.push(madeUl(res[i].id, res[i].task, res[i].finish, i));
      }
    })
    .then((res) => {
      for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < a[j].length; k++) {
          if (/[delete]+/gi.test(a[j][k])) {
            a[j][k].addEventListener("click", deleteGo(a[j][k]));
          }
        }
      }
    })
    .catch((err) => {
      console.error(new Error("리스트 불러오는 중 에러 발생"));
    });
}

function plusAdd() {
  const req = {
    taskInput: taskInput.value,
  };

  if (!req.taskInput) {
    return alert("할 일을 입력해주세요.");
  } else {
    fetch("/to-do-list-c", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          location.href = "/";
        } else {
          alert(res.msg);
        }
      })
      .catch((err) => {
        console.error(new Error("리스트 추가 중 에러 발생"));
      });
  }
}

function deleteGo(el) {
  const req = {
    id: el.id.replace("delete", ""),
  };
  fetch("/to-do-list-d", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("리스트 삭제 중 에러 발생"));
    });
}

function editGo(el) {
  const req = {
    check: dataTask.value,
    id: dataTask.id.replace("dataTask", ""),
  };
  fetch("/to-do-list-e", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("리스트 수정 중 에러 발생"));
    });
}

function checkGo(el) {
  const req = {
    dataTask: check.value,
    id: check.id.replace("check", ""),
  };
  fetch("/to-do-list-c", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("체크표시 중 에러 발생"));
    });
}
