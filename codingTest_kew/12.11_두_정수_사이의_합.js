function solution(a, b) {
    let anwser = 0;
    if (a < b){
        for (a; a <= b; a++){
            anwser += a;
        }
    if (a === b){
            anwser === a
        }
    }
    else{
        for (b; b <= a; b++){
            anwser += b;
        }
    }
    return anwser;
}