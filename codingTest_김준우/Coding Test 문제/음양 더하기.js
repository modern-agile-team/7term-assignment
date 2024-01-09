function solution(absolutes, signs) {
    let abs = 0;
    let total = 0;
    for(let i =0; i<signs.length; i++){
        if(signs[i] === true){
            abs = absolutes[i];
        }
        else if(signs[i] === false){
            abs = -absolutes[i];
        }
        total += abs;
    }

    return total;
}

// 절댓값을 담은 정수 배열 == absolutes
// 부호를 담은 불리언 배열 == sign +면 true, -면 false
// 실제 정수의 합을 구하여 return
