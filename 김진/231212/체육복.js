function solution(n, lost, reserve) {
  for (let i of lost) {
    for (let j of reserve) {
      if (i === j) {
        lost = lost.filter((v) => v !== i);
        reserve = reserve.filter((v) => v !== j);
      }
    }
  }
  count = reserve;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < count.length; j++) {
      if (Math.abs(lost[i] - count[j]) === 1) {
        lost = lost.filter((v) => v !== lost[i]);
      }
    }
  }
  return n - lost.length;
}
