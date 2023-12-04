function numPY(s){
  return s.match(/p/ig).length == s.match(/y/ig).length
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )