function solution(s){
    let words = s.split(""); //하나씩 계산하기위해 스플릿 사용
    if(s.length === 4 || s.length === 6) {  // 4거나6일떄만 트루를뱉게함
        for (let i = 0; i < words.length; i++) { 
          if (isNaN(words[i])) { //NaN을 쓴후 문자열이아닌 숫자를 하나씩 구분하기 위해 사용
            return false;
          }      
        }
    } else {
      return false;
    }
    return true; // 문자열이 4거나 6일경우 트루
  }              // 아닐경우 이프와 포문을 타고가 맞는지 틀린지 파악하기