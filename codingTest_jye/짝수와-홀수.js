const num = 2;

function solution(num) {
    var answer = "Even";
    if (num % 2){
        answer = "Odd";
    }
    return answer;
}

console.log(solution(num));

