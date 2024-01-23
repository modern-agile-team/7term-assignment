// n*n 크기의 정사각 격자
// 인형이 없는 칸은 빈칸
// 크레인은 좌우로 움직인다
// 가장 위에 있는 인형을 집는다
// 인형은 바구니에 쌓인다. 가장 아래 칸부터 차곡차곡
// 같은 모양의 인형 두 개가 연속해서 쌓이면 바구니에서 삭제
// 인형 안 집히는 경우는 없으나 인형이 없으면 아무 것도 잡히지 않는다.
// 게임 화면의 격자의 상태가 담긴 2차원 배열 board 인형 종류 비교는 숫자로
// 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves
// 사라진 인형의 개수를 return

function solution(board, moves) {
  let pick = [];
  let answer = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        pick.push(board[j][moves[i] - 1]);
        board[j].splice(moves[i] - 1, 1, 0);
        break;
      }
    }
  }
  for (let i = 0; i < pick.length; i++) {
    if (pick[i] === pick[i + 1]) {
      answer += 2;
      pick.splice(i, 2);
      i = -1;
    }
  }

  return answer;
}
