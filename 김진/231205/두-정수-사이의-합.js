function solution(a, b) {
  let result = 0;
  let start = a - b > 0 ? b : a;
  let stop = a - b > 0 ? a : b;

  for (let i = start; i <= stop; i++) {
    result += i;
  }
  return result;
}
