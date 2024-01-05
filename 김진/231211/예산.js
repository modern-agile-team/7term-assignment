function solution(d, budget) {
  let sum = 0;
  let count = 0;
  for (let i of d.sort((a, b) => a - b)) {
    sum += i;
    if (sum <= budget) {
      count += 1;
    }
  }
  return count;
}
