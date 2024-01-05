function solution(lottos, win_nums) {
    let wins = 0
    let arr1 = []
    let zero = 0
    for (let num1 = 0; num1 <= 5; num1++){
        if(lottos[num1] === 0){
            zero++
        }
        for (let num2 = 0; num2 <= 5; num2++){
            if(lottos[num1] === win_nums[num2]){
             wins ++
            }
        }
    }
    if (wins === 4 && zero === 0){
        arr1.push(3,3)
    }
    else if (wins === 2){
        arr1.push(5)
    }
    else if (wins === 3){
        arr1.push(4)
    }
    else if (wins === 4){
        arr1.push(3)
    }
    else if (wins === 5 && zero === 0){
        arr1.push(2)
        arr1.push(2)
    }
    else if (wins === 6){
        arr1.push(1)
        arr1.push(1)
    }
    else {
        arr1.push(6)
    }
    if (zero === 1){
        arr1.push(arr1[0]-1)
    }
    else if (zero === 2){
        arr1.push(arr1[0]-2)
    }
    else if (zero === 3){
        arr1.push(arr1[0]-3)
    }
    else if (zero === 4){
        arr1.push(arr1[0]-4)
    }
    else if (zero === 5){
        arr1.push(2)
    }
    else if (zero === 6){
        arr1.push(arr1[0]-5)
    }
    else if (zero === 0 && wins === 0){
        arr1.push(6)
    }
    arr1.sort()
    return arr1
}