function solution(numbers) {
    let answer = [];
   
    for(let i = 0; i < numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
          
             let inumindex = numbers[i];
             let jnumindex = numbers[j];
             answer.push(inumindex + jnumindex);
        }
    }
    answer.sort(function(a, b){
        return a - b;
    });
    const setAnser = [...new Set(answer)];
    return setAnser;
}

