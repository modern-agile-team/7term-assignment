function solution(s) {
    let answer = true;
    if((s.length===4||s.length===6)&&isNaN(s)===false){
        answer=true
    }else{
        answer=false
    }
    return answer;
}
