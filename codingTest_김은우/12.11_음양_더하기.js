function solution(absolutes, signs) {
    let num = 0
    let num5 = 0
    let arr1 =[]
    for(let num1 = 0; num1 <= 1000; num1++){
        if (signs[num1] === false){
            arr1.push(absolutes[num1])
        }
    }
    absolutes.forEach(function(num2){
                            num +=num2
                             })
         arr1.forEach(function(num3){
                            num5 +=num3
                             })
    return num - num5*2
}