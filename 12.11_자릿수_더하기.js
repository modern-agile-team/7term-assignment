function solution(n) {
    let num1 = String(n)
    num1.split();
    let anwser = 0;
    for(let i = 0;i < num1.length;i++){
        anwser += Number(num1[i]);
    }
    return anwser;
}