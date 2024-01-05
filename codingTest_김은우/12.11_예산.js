function solution(d, budget) {
    d.sort(function(a,b){
        return a - b
    })
    let anwser = 0
    for (let num1 = 0; num1 <= 100; num1++){
        budget -= d[num1]
        if (budget >= 0){
            anwser++
        }
        else
        break;
    }
        return anwser
}