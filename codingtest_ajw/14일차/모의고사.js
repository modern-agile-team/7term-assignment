function solution(answers) {
    let answer = [];
    let oneTester = [1, 2, 3, 4, 5];
    let twoTester = [2, 1, 2, 3, 2, 4, 2, 5];
    let threeTester = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === oneTester[i % 5]){
            count[0]++;
        }if(answers[i] === twoTester[i % 8]){
            count[1]++;
        }if(answers[i] === threeTester[i % 10]){
            count[2]++;
        }
    }
    let countMax = Math.max(count[0], count[1], count[2]);
    for(let j = 0; j < count.length; j++){
        if(count[j] === countMax){
            answer.push(j + 1);
        }
    }
    return answer;
}