function solution(n, lost, reserve) {
    let answer = 0;
    let arr = [];
    arr = lost.concat(reserve);
    arr.sort((a, b) => a - b); // 배열을 합치고 정렬한 이유: lost와 reserve를 합쳐서 연속성을 찾으려
                                // 했지만 lost와 reserve값이 구분이 안가서 실패한 알고리즘 같습니다.
    for(let i = 0; i<reserve.length; i++){
        if(lost[i] - reserve[i] === 1 || lost[i] - reserve[i] === -1){
            answer = n;
        }else if(lost[i] - reserve[i + 1] === 1 || lost[i] - reserve[i + 1] === -1){
            answer = n;
        }else {
            --n;
        }
        answer = n;
    }return answer;
}
//그리디 알고리즘:선택의 순간마다 당장 눈앞에 보이는 최적의 상황만을 쫓아 최종적인 해답에 도달하는 방법
 //lost 와 reserve 두 값을 비교해서 차이가 +-1이면(ex. 2-1, 1-2) n값을 유지 차이가 1이 아니면 n값을 -1 
 //lost 와 reserve에 동일한 값이 있으면 제외 (여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.)
 //체육복을 빌려주려면 바로 앞번호 or 바로 뒷번호 두가지 경우(체격 순이어서)

//알고리즘 설명: for문과 if문을 통해서 lost[i]에서 reserve[i]를 뺏을 때 1과 -1이면 체육복을 빌릴 수 있으니까 n값을
//answer에 그대로 넣고 lost[i]에서 reserve[i + 1]을 뺀 이유는 lost[0]과 reserve[1]에 체육복을 
// 빌려줄 사람이 있다고 생각해서 작성했습니다. 그러고나서 값이 존재하지 않으면 전체 학생수 n을 감소시키고 
// answer에 넣었습니다.