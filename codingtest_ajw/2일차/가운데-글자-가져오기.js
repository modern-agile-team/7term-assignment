function solution(s) {
    let answer = '';
    if(s.length%2==0){
        answer=s[s.length/2-1]+s[s.length/2] //length함수를 쓰면 int로 형변환 되기때문에 
                                              //대괄호로 인덱스처리
    }
    else{
        answer=s[Math.floor(s.length/2)]  //Math.floor: 반내림함수
    }
    return answer;
}
console.log(solution('abcde'))
console.log(solution('qwer'))  