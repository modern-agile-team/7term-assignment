// 처음에 if문으로 구매한 로또배열이 win_nums배열안에 있는지 검사해서
// 안에 존재하면 count값을 증가시키고 만약 구매한 로또 배열에 0이 있으면
// zeroCount값을 증가시킨다음에 count값이 6개면 다 맞았기 때문에 결과값에 1,1 을 넣어주고
// count값이 5개면 나머지 하나 값이 0인지 그냥 틀린 값인지 검사해서 0이면 1,2 를 틀린값이면 2,2를 결과값을 출력한다.
// 이것을 count 6...0까지 zeroCount 값이 0...6까지 나올 수 있는 모든 경우의 수를 검사한다.

function solution(lottos, win_nums) { 
    let answer = [];
    let count = 0;
    let zeroCount = 0;
    for (let i=0; i<lottos.length; i++){
        if (win_nums.includes(lottos[i])){
            count++;
        }else if(lottos[i] === 0){
            zeroCount++;
        }
    }
    if(count === 6){
        answer.push(1, 1);
    }
    if(count === 5){
        if(zeroCount === 1){
            answer.push(1, 2);
        }else{
            answer.push(2, 2);
        }
    }
    if(count === 4){
        if(zeroCount === 2){
            answer.push(1, 3);
        }else if(zeroCount === 1){
            answer.push(2, 3);
        }else{
            answer.push(3, 3);
        }
    }
    if(count === 3){
        if(zeroCount === 3){
            answer.push(1, 4);
        }else if(zeroCount === 2){
            answer.push(2, 4);
        }else if(zeroCount === 1){
            answer.push(3, 4);
        }else{
            answer.push(4, 4);
        }
    }
    if(count === 2){
        if(zeroCount === 4){
            answer.push(1, 5);
        }else if(zeroCount === 3){
            answer.push(2, 5);
        }else if(zeroCount === 2){
            answer.push(3, 5);
        }else if(zeroCount === 1){
            answer.push(4, 5);
        }else{
            answer.push(5, 5);
        }
    }
    if(count === 1){
        if(zeroCount === 5){
            answer.push(1, 6);
        }else if(zeroCount === 4){
            answer.push(2, 6);
        }else if(zeroCount === 3){
            answer.push(3, 6);
        }else if(zeroCount === 2){
            answer.push(4, 6);
        }else if(zeroCount === 1){
            answer.push(5, 6);
        }else{
            answer.push(6, 6);
        }
    }
    if(count === 0){
        if(zeroCount === 0){
            answer.push(6, 6);
        }else if(zeroCount === 1){
            answer.push(6, 6);
        }else if(zeroCount === 2){
            answer.push(5, 6);
        }else if(zeroCount === 3){
            answer.push(4, 6);
        }else if(zeroCount === 4){
            answer.push(3, 6);
        }else if(zeroCount === 5){
            answer.push(2, 6);
        }else{
            answer.push(1, 6);
        }
    }
    return answer;
}
