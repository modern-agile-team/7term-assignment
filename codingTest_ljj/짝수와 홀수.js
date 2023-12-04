function solution(num) {
    if(num%2==0){
        var answer = 'Even';
    }
    else if(num%2 ==1) {
        var answer = 'Odd';
    }
    return answer;
}
console.log(solution(3));
console.log(solution(4));