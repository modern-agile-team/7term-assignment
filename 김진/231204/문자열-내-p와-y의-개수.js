function solution(s) {
  upper_s = s.toUpperCase();
  let pNum = 0;
  let yNum = 0;
  for (let i = 0; i < upper_s.length; i++) {
    if (upper_s[i] == "P") {
      pNum++;
    } else if (upper_s[i] == "Y") {
      yNum++;
    }
  }

  if (pNum == yNum || (pNum == 0 && yNum == 0)) {
    return true;
  } else {
    return false;
  }
}
