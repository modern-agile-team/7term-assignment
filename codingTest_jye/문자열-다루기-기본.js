// 어차피 s에 문자가 하나라도 있다면 False를 반환한다.
// 문자열 s의 길이는 4 or 6으로 한정적임. 이것도 확인하는걸 주의해야함.
//1. 배열로 만들어서 배열의 요소하나하나가 문자인지 하는 방법 - 돌아가는방법이지만 확실함
//2. 배열로 만들어서 배열을 한번에 확인하는 메서드, 함수가 있나? - 방법이 있긴한데... 이것도 엄청 돌아가는듯함
//3. 굳이 배열로 만들지 않아도 문자열 자체를 확인하는 방법이 있나? - isNaN()함수가 있다. 
//3 번 방식의 한계는 0x000000 4e10과 같은 숫자표현식 때문에 사용하기 어렵다.
//따라서 isNaN을 사용하되, 1번의 방식인 배열화 후 배열내부 하나하나를 비교하는 것을 하자.
// isNaN() 함수는 숫자가 아닌 대상은 true, 숫자면 false를 반환

function solution(s) {
    let answer = true;
    let key = [];
    let strlength = 0;

    strlength = s.length;
    
    key = s.split('');
    
    if (strlength === 4 || strlength === 6){
     
        for (let i = 0; i < s.length; i++)
        {
         if (isNaN(key[i]))
           {
               answer = false;
               break;
           }
        }
  } else {
    answer = false
  }
    return answer;
}
//pr
