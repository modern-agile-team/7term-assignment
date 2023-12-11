//인접한 학생들은 서로서로 체육복을 빌려줄수 있다.
//여벌옷을 가져온 놈이 옷을 도난당했을수도 있다. 이때는 그 여벌옷을 입는다.
//겹치는것 제거, 겹치는것 제거 하면서 가면 될것같다.
let n = 5;
let lost = [2, 3, 4];
let reserve = [1, 2, 4];


function solution(n, lost, reserve) {
    let answer = 0;
    
    answer += n - lost.length; //이거 한코드면 된다...
    
    reserve.sort((a, b) => a - b);
    lost.sort((a, b) => a - b);
    
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) { //자기꺼 도난당했는데 여벌있는 경우
            reserve = reserve.filter((element) => element !== lost[i]);
            answer++;
            console.log(reserve);
            continue;
        } else if (reserve.includes(lost[i] - 1)) { //자기꺼 도난당했는데 바로 전 번호 애가 갖고있는경우
            reserve = reserve.filter((element) => element !== lost[i] - 1);
            answer++;
            console.log(reserve);
            continue;
        } else if (reserve.includes(lost[i] + 1)) { //자기꺼 도난당했는데 바로 뒷 번호 애가 갖고있는 경우
            reserve = reserve.filter((element) => element !== lost[i] + 1);
            answer++;
            console.log(reserve);
        }
    }
    
    return answer;
}

solution(n, lost, reserve);


//100% 못채운 불가능한 파일