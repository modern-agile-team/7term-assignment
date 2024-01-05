function solution(board, moves) {
    let basket = []; //바구니
    let lostBasket = []; //사라지고 남은 바구니
    for (let i = 0; i < moves.length; i++){
      for (let j = 0; j < board.length; j++){
       if(board[j][moves[i]-1] > 0){
         basket.unshift(board[j][moves[i]-1]); //바구니에 넣어줌
         lostBasket.unshift(board[j][moves[i]-1]); //잃어버릴 바구니에도 넣어줌
         board[j][moves[i]-1] = 0; //바구니에 넣으면 0으로 수정
         break; //인형을 바구니에 넣으면 브레이크
       }
      }
      if (lostBasket[0] === lostBasket[1]) {
          lostBasket.shift(); //제일 앞에 있는 두 개 터트림
          lostBasket.shift();
      }
    }
    return basket.length - lostBasket.length; //바구니와 잃어버린 바구니의 차를 리턴
  }​