function solution(a, b) {
    let answer = 0;
    if(a===b){
        answer=a
    } 
    else if(a<b)
        for(let i=a;i<=b;i++){
            answer+=i
        }
    else
        for(let i=b;i<=a;i++){
            answer+=i
        }
       
    return answer;
}
console.log(solution(3,5))
console.log(solution(3,3))
console.log(solution(5,3))