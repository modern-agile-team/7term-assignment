function solution(N, stages) {
    let answer = [];
    let users = stages.length;
    let stagesNumber = [];
    let result = [];
    for(let j = 1; j < N + 1; j++){
        let failUsers = stages.filter(element => j === element).length;  
        stagesNumber = [
            {stages : j, failPercent : failUsers / users}
            ]  
        answer[j - 1] = stagesNumber.sort((a, b) => (b.failPercent - a.failPercent));
        users -= failUsers;
    }  
  answer = answer.map(value => value[0])  //2차원 배열을 1차원 배열로 만들기 위함
  answer = answer.sort((a, b) => (b.failPercent - a.failPercent)); // 실패율 오브젝트를 통해 정렬
for(let i = 0; i < answer.length; i++){
    result.push(answer[i].stages);
}
    return result;
}