function solution(s) {
  let answer = '';
  let arr = [];
  let strLength = 0;

  arr = s.split('');
  strLength = s.length;

  if (strLength % 2 != 0) {
    answer = arr[parseInt(strLength / 2)]; //몫만 취하는 함수 parseInt()이용 및 배열에 넣기
  } else {
    answer = arr[parseInt(strLength / 2) - 1] + arr[parseInt(strLength / 2)];
  }

  return answer;
} //pr
