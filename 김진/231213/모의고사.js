function solution(answers) {
  arr1 = [1, 2, 3, 4, 5];
  arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  scores = [];
  answer = [];
  function grading(arr, answer) {
    let answerCount = 0;
    let c = 0;
    while (0 < c < Math.ceil(answer.length / arr.length)) {
      c++;
      arr = arr.concat(arr);
    }
    for (let i = 0; i < answer.length; i++) {
      if (arr[i] === answer[i]) {
        answerCount += 1;
      }
    }
    scores.push(answerCount);
  }
  grading(arr1, answers);
  grading(arr2, answers);
  grading(arr3, answers);
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === Math.max(...scores)) {
      answer.push(i + 1);
    }
  }
  return answer;
}
