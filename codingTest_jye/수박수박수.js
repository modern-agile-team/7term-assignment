function solution(n) {
    let answer = '';
    
    for (let i = 1; i <= n; i++) {
        answer = (i % 2) == 0 ? answer + "박" : answer + "수";
    }
    
    return answer;
}