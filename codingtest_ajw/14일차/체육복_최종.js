function solution(n, lost, reserve) {
    let allStudent = Array(n).fill(1);
    reserve.map((reserve) => {allStudent[reserve - 1] += 1});
    lost.map((lost) => {allStudent[lost - 1] -= 1});
    for(let i = 0; i < n; i++){
    if(allStudent[i] === 0 && allStudent[i - 1] === 2){
        allStudent[i] = 1;
        allStudent[i - 1] = 1;
    }else if(allStudent[i] === 0 && allStudent [i + 1] === 2){
        allStudent[i] = 1;
        allStudent[i + 1] = 1;
    }else if(allStudent[i] === 0 && allStudent[i - 1] === 2){
        allStudent[i] = 1;
        allStudent[i - 1] = 1;
    } 
    }
    return allStudent.filter(element => 0 < element).length;
}