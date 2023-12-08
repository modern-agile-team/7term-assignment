//동명이인 처리 주의할것 3명 4명일수도..
//완주하지 못한 사람 반드시 1명 존재 그 한명을 리턴
//이름은 무조건 소문자
//중복되는 값인데 서로 다른 취급을 해야할 놈들임 배열을 활용하는건 한계가 있어보임
//객체의 프로퍼티를 통해 접근하면 뭔가 보일듯함
//키와 값을 사용하니까 키를 이용해보면 되지않을까?
//배열을 객체로 하려면? Object.assign(target, source)이용
//객체의 프로퍼티 개수를 구하려면?
//Object.keys() 함수는 입력받은 객체의 key 목록을 배열로 리턴 -> 배열의 개수를 .length로 처리
// 그럼이제 for문으로 돌려서 비교하면 될듯?
// 객체의 키에 접근할 때는 문자열로 접근해야함!!!!!!
// 키를 통해 객체의 값끼리 비교하려면 어떻게해야하지? -> string으로 만들어서 비교하자
// 하지만 undefined는 비교할수없다 따라서 undefined가 실행되지 않게 사전에 제외시켜버리자
// Object.values()를 통해 객체의 value만 뽑을수 있다.
function solution(participant, completion) {
  let answer = '';

  participant = Object.assign({}, participant); //객체화
  completion = Object.assign({}, completion); //객체화

  const Key = Object.keys(participant).length;

  for (let i = 0; i < Key; i++) {
    for (let j = 0; j < Key - 1; j++) {
      if (completion[j] === undefined) {
        continue;
      } //사전에 undefined 제외시킴
      //어차피 completion의 크기는 participant보다 1작다.
      //for문을 돌다가 completion의 값이 제거되어 없어질수 있음 이 때도 고려해야함
      //undefined가 나오면 if문은 false를 반환함 -> 실행안함
      if (participant[i].toString() === completion[j].toString()) {
        delete participant[i];
        delete completion[j];

        break; //삭제 했으면 for문 그만돌아라.
      } //객체의 키에 접근
    }
  }
  return Object.values(participant)[0];
}

//알고리즘 자체는 좋았으나, 10만명을 비교하기엔 매우매우 비효율적인 코드임.
//효율성 테스트 탈락
//dd
