function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => {
    return a - b;
  });
  reserve = reserve.sort((a, b) => {
    return a - b;
  });
  let same = lost.filter((data) => reserve.includes(data));
  let total = n - lost.length;
  if (same.length === 0) {
    for (let i = 0; i < lost.length; i++) {
      for (let j = 0; j < reserve.length; j++) {
        if (lost[i] - reserve[j] === 1 || lost[i] - reserve[j] === -1) {
          total += 1;
          lost.splice(i, 1, -1);
          reserve.splice(j, 1, -1);
        }
      }
    }
  } else {
    total += same.length;
    for (let i = 0; i < same.length; i++) {
      for (let j = 0; j < lost.length; j++) {
        if (same[i] === lost[j]) {
          lost.splice(j, 1, -1);
        }
      }
    }
    for (let i = 0; i < same.length; i++) {
      for (let j = 0; j < reserve.length; j++) {
        if (same[i] === reserve[j]) {
          reserve.splice(j, 1, -1);
        }
      }
    }
    for (let i = 0; i < lost.length; i++) {
      for (let j = 0; j < reserve.length; j++) {
        if (lost[i] - reserve[j] === 1 || lost[i] - reserve[j] === -1) {
          total += 1;
          lost.splice(i, 1, -1);
          reserve.splice(j, 1, -1);
        }
      }
    }
  }
  return total;
}
// lost / reserve 요소 같은 게 있는지 -> 여벌 체육복 해당 같은 요소 친구가 입어야함
// 겹치는 경우가 있는 경우 없는 경우
// 그외 reserve 요소 앞 뒤 숫자에 lost가 있는지
