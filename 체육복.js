function solution(n, lost, reserve) {
    let arr1
    arr1 = lost.filter(x => reserve.includes(x));
    lost = lost.filter(x => !arr1.includes(x));
    reserve = reserve.filter(x => !arr1.includes(x));
    n -= lost.length
    
    lost.sort((a,b) => {
        return a-b
    })
    reserve.sort((a,b) => {
        return a-b
    })
    for(let num = 0; num <=29; num++){
        for(let num1 = 0; num1 <=29; num1++){
        if(lost[num] === reserve[num1]+1 || lost[num] === reserve[num1]-1){
            n++
            lost.shift()
        }
    }
    }
    return n
}