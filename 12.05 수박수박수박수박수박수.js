function solution(n) {
    let anwser = ''
    let a = 0;
    for(a; a < n; a++){
        if (a % 2 == 1){
            anwser += "박"
        }
        else {
            anwser +="수"
        }
    }
    return anwser;
}