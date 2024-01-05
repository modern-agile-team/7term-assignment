function solution(board, moves) {
    let answer = 0;
    let basket = [] ;
    for(let i = 0; i < moves.length; i++){
        for(let j = 0; j < board.length; j++)
        if (board[j][moves[i]-1] != 0) {
            basket.push(board[j][moves[i]-1]);
            board[j][moves[i]-1] = 0;
            break;
        }
    }
  for (let i = 0; i < basket.length; i++){
    if(basket[i] === basket[i+1]){
      basket.splice(i,2)
      i = -1;
      answer += 2;
    }
  }
    return answer;
}