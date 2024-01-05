function solution(n, sum = 0) {
  const Arr = String(n).split("").map(Number);
  Arr.forEach((num) => {
    sum += num;
  });
  return sum;
}
