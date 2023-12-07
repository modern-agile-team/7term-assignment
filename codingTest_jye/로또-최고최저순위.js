function solution(lottos, win_nums) {
    let answer = [];
    let key = 0; //맞은 개수
    let amount0 = 0; //0의 개수
    
    lottos.sort(); //0이 있으면 0이 맨 앞에 올것이다.
    
    //0 새는 과정
    for (let i = 0; i < 6; i++) {
        if (lottos[i] !== 0) {break;}
        amount0++; 
    }
    
    //로또맞은 개수 구하는 과정 key에 담았다.
    //이중 for문을 사용했는데 의미가 없는 부분이 생긴것같네요
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
            if (lottos[i] === win_nums[j]) {
                key++;
            }
        }
    }
    
    //최고 등수 구하기
    if (key + amount0 < 2) {
        answer.push(6); //6등
    } else {
        amount0 = 7 - (key + amount0); //1~5등
        answer.push(amount0);
    }
    
    // 최저 등수 구하기
    if (key < 2) {
        answer.push(6); //6등
    } else {
        key = 7 - key; //1~5등
        answer.push(key);
    }
    
    return answer
}