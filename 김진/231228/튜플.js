function solution(s) {
  const arr = [];
  return s
    .replace(/\{/g, "") //모든 { 제거
    .split(/\}/g) //} 를 기준으로 배열로 쪼개기
    .filter(Boolean) //빈 배열 제거
    .map((v) => v.replace(/^\,/g, "")) //문장 첫 , 를 제거
    .sort() //오름차순 정렬 (문자열이기 때문에 length 를 기준으로 정렬됨)
    .map((el, i) => {
      //요소와 인덱스를 인자로 쓰는 map 함수 실행
      el = el.split(","); //el 는 , 로 구분된 문자열이기 때문에 배열로 쪼갬
      arr.push(el); //따로 arr 배열에 push 해줌
      if (i !== 0) {
        //처음 요소는 예외처리
        el = el.filter((x) => !arr[i - 1].includes(x)); //이전 요소와 비교하여 중복되는 값을 제거
      }
      return el;
    })
    .join()
    .split(",")
    .map(Number); //2차원 배열을 join 해주고
  // ',' 를 기준으로 배열로 쪼갠 후 문자열 배열을 숫자형으로 변환해주고 리턴
}
