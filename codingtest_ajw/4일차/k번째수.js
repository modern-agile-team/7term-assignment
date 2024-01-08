function solution(array, commands){
    let answer = [];
    let cutArray = [];
    for (let i = 0; i < commands.length; i++){
        cutArray = array.slice (commands[i][0]-1, commands[i][1]);
        cutArray.sort ( (a, b) => a - b );
        answer[i] = cutArray[commands[i][2]-1];
    }
    return answer;
}
