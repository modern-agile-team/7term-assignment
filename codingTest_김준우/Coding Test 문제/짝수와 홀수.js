function solution(num) {
    const answer = num % 2 ===0 ? "Even" : "Odd"
    return answer;
}
console.log(solution(3));
console.log(solution(4));