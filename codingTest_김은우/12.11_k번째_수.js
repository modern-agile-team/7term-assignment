function solution(array, commands) {
    let arr2 =[]
        for(let num1 = 0; num1 <= commands.length-1; num1++){
    let arr1 = array.slice(commands[num1][0]-1,commands[num1][1])
    arr1.sort(function(a,b){
        return a - b;
    })
    arr2.push(arr1[commands[num1][2]-1])
        }
    return arr2
}
