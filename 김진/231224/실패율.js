function solution(N, stages) {
    const failList = [];
    const sortList = [];
    const result = [];
    for (let i = 0; i < N+1; i++) { //스테이지 길이만큼 배열 생성
      failList.push(0);
    }
    for (let j of stages) { //클리어하지 못한 플레이어 수 배열에 더해주기
      failList[j-1] += 1;
    }
    for (let k = 0; k < N+1; k++) { 
      user = failList[k];
      failList[k] = (stages.length === 0) ? 0 : (failList[k] / stages.length);
      sortList.push(failList[k]); //0 나누기 0 예외처리 후 실패율 반환한 값
      for (let l = 0; l < user; l++) {
        stages.pop();
      }
    }
    failList.pop(); //전부 클리어한 사용자 수 제외
    sortList.pop();
    sortList.sort((a, b) => a - b).reverse(); //내림차순 정렬
    for (let m = 0; m < N; m++) {
      for (let n = 0; n < N; n++) {
        if (sortList[m] === failList[n]) { //내림차순 정렬한 배열과 원본 배열 비교
          result.push(n+1); //같으면 원본 배열의 인덱스 +1 을 result 배열에 push
          failList[n] = '' //비교 완료되면 원본 배열에서 삭제
        }
      }
    }
    return result;
  }​