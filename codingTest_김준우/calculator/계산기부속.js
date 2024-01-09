function calculate() {
  let input = document.getElementById("key").value;
  if (input.toLowerCase() === "exit") {
    exit();
  } else {
    let { Num, Str } = divide(input);
    console.log(Num, ",", Str);
    let first = order(Str);
    Num[0] = call(first, Num, Str);
    document.getElementById("result").innerText = Number(Num[0]).toFixed(2);
  }
}
function divide(cal) {
  const Num = cal.split(/["+"|"\-"|"*"|"/"]/g);
  const Str = cal.match(/["+"|"\-"|"*"|"/"]/g);
  for (let i = 0; i < Num.length; i++) {
    Num[i] = Number(Num[i]);
  }
  return { Num, Str };
}
function exit() {
  window.close();
}
function order(Str) {
  let first = [];
  for (let i = 0; i < Str.length; i++) {
    if (Str[i] === "*" || Str[i] === "/") {
      first.push(1);
    } else {
      first.push(2);
    }
  }
  return first;
}
function call(first, Num, Str) {
  for (let i = 0; i < Str.length; i++) {
    if (first[i] === 1) {
      mulDiv(Num, Str, first, i);
      i = condition(i);
    }
    if (first.length === 0) {
      break;
    }
    if (!first.includes(1)) {
      pluMin(Num, Str, first, i);
      i = condition(i);
    }
    if (first.length === 0) {
      break;
    }
  }
  return Num[0];
}
function mulDiv(Num, Str, first, i) {
  switch (Str[i]) {
    case "*":
      Num[i] *= Num[i + 1];
      break;
    case "/":
      Num[i] /= Num[i + 1];
      break;
  }
  del(Num, Str, i, first);
}
function pluMin(Num, Str, first, i) {
  switch (Str[i]) {
    case "+":
      Num[i] += Num[i + 1];
      break;
    case "-":
      Num[i] -= Num[i + 1];
      break;
  }
  del(Num, Str, i, first);
}
function del(Num, Str, i, first) {
  Num.splice(i + 1, 1);
  first.splice(i, 1);
  Str.splice(i, 1);
}
function condition(i) {
  if (i === 0) {
    i = -1;
  }
  if (i > 0) {
    i = 0;
  }
  return i;
}