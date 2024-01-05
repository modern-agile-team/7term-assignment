//n x n 배열
//뽑은 인형을 담는 바구니는 제한이 없음
//바구니는 차곡차곡 쌓임 그러다가 같은 인형 2개 만나면 그 2개는 없어짐

function solution(board, moves) {
    let answer = 0;
    let basket = [];
    let key = [];
   //moves의 내용물을 나중에 배열에 사용하기위해 1씩 뺴준다.
    moves = Array.from(moves, x => x - 1);
    //key라는 배열 초기화
    for (let i = 0; i < board.length; i++) {
        key.push([]);
    }
    //2개 겹치는것 확인하는 함수
    function check(basket) {
        for (let i = 0; i < basket.length - 1; i++) {
            if (basket[i] === basket[i + 1]) {
                basket.splice(i, 2);
                answer++;
                i = -1;
            }
        }
    }
    // 쓸것들 만 정리
    for (let i = 0; i < board.length; i++) {
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[j][i] !== 0) {
                key[i].push(board[j][i])
            }
        }
    }
    //basket에 담기
    for (let i = 0; i < moves.length; i++) {
        if (key[moves[i]] && key[moves[i]].length) {
        basket.push(key[moves[i]][key[moves[i]].length - 1]);
        key[moves[i]].pop();
        }
    }
    check(basket);
    return answer * 2;
}
