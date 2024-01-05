function solution(answers) {
    let arr1 = [1,2,3,4,5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let num1 = 0, num2 = 0, num3 = 0
    for(let i = 0; i < answers.length; i++){
        if (arr1[i % arr1.length] === answers[i]){
            num1++;
        }
        if (arr2[i % arr2.length] === answers[i]){
            num2++;
        }
        if (arr3[i % arr3.length] === answers[i]){
            num3++;
        }
    }
    let arr5 = []
    if (num1 === num2 && num2 === num3){
        arr5.push(1,2,3)
    }
    else if(num1 > num2 && num1 > num3){
        arr5.push(1)
    }
    else if(num2 > num3 && num2 > num1){
        arr5.push(2)
    }
    else if(num3 > num1 && num3 > num2){
        arr5.push(3)
    }
    else if (num1 === num2){
        arr5.push(1,2)
    }
    else if (num2 === num3){
        arr5.push(2,3)
    }
    else if (num1 === num3){
        arr5.push(1,3)
    }
    return arr5
}