function solution(numbers) {
  let Arr = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (j <= i) {
        continue;
      } else {
        let indexJ = numbers[i] + numbers[j];
        Arr.push(indexJ);
      }
    }
  }
  Arr = new Set(Arr);
  Arr = [...Arr];
  Arr = Arr.sort(function (a, b) {
    return a - b;
  });
  return Arr;
}
