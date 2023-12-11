let n = 5;
let lost = [2, 3, 4];
let reserve = [1, 2, 4];

function solution(n, lost, reserve) {
    let answer = 0;
    let key = [];
    
    key = Array.from({length : n}, (v, i) => i + 1);
    
    lost.sort((a, b) => (a - b));
    reserve.sort((a, b) => (a - b));
    
    reserve.sort((a, b) => a - b);
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if(reserve[i] === lost[j]){
                reserve.splice(i, 1);
                lost.splice(j, 1);
            }
        }
    }
    
    for (let j = 0; j < lost.length; j++) {
        key[lost[j]-1] = 0;
    }
    
    for (let i = 0; i < n; i++) {
        if (reserve[i] !== i + 1) {
            reserve.splice(i, 0, 0);
        }
    }

    
    for (let i = 0; i < n; i++) {
        for (let j = i - 1; j <= i + 1; j++) {
            if (reserve[i] && key[j]) {
                continue;
            } else if (j === -1) {
                continue;
            } else if (j === n) {
                continue;
            } else if (key[j] === 0 && reserve[i] !== 0){
                key[j] = j + 1;
                reserve[i] = 0;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (key[i]) {
            answer++;
        }
    }

    return answer;
}
solution(n, lost, reserve);