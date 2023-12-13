function solution(numbers) {
    let arr2=[];
    for(let num1 = 0; num1 <= numbers.length-1; num1++){
        for(let num2 = 0; num2 <= numbers.length-2; num2++){
            if (num1 != num2){
            arr2.push(numbers[num1]+numbers[num2])
            }
        }
    }
    let set = new Set(arr2);
    let arr3 = [...set];
    arr3.sort(function(a,b){
        return a-b
    })
    return arr3;
}