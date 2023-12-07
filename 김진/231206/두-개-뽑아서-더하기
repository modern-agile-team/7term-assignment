function solution(numbers, result = []) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  result = [...new Set(result)];
  result.sort(function compare(a, b) {
    return a - b;
  });
  return result;
}
