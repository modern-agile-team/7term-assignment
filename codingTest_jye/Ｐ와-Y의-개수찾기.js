function solution(s) {
    let answer = true;
    let amountp = 0;
    let amounty = 0;

    const key = s.toLowerCase();

    
    amountp = key.split("p").length-1;
    amounty = key.split("y").length-1;
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    
     if (amountp != amounty) {
        answer = false;
    }

    return answer;
}