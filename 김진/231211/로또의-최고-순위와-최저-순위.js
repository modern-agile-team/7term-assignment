function solution(lottos, win_nums) {
  let zeroCount = lottos.filter((num) => num === 0).length; //알아볼 수 없는 번호 찾기
  let sameCount = lottos.filter((num) => win_nums.includes(num)).length; //중복 요소 찾기
  function resultFind(arr) {
    switch (arr) {
      case 6:
        return 1;
        break;
      case 5:
        return 2;
        break;
      case 4:
        return 3;
        break;
      case 3:
        return 4;
        break;
      case 2:
        return 5;
        break;
      default:
        return 6;
    }
  }
  return [resultFind(sameCount + zeroCount), resultFind(sameCount)];
}
