//핵심은 sort()의 사용

function solution(s) {
    let answer = '';
    let key = [];
    
    key = s.split('');
    
    key.sort(function(a, b) {
        if(a < b) return 1;
        if(a > b) return -1;
        if(a === b) return 0;
    });
    answer = key.join('');
    
    return answer;
}//pr용 주석