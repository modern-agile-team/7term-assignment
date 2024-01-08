function solution(n, arr1, arr2) {
    let answer = [];
    for(let i = 0; i < n; i++){
    answer[i] = (arr1[i] | arr2[i]).toString(2);  //arr1과 arr2를 2진수로 바꾸고 or연산    
    answer[i] = answer[i].padStart(n, '0');  //n값으로 제공된 길이를 맞추기 위해 0을 채움
    answer[i] = String(answer[i]).replace(/[1]/g, '#'); //정규표현식을 통해서 1이면 #으로 변경
    answer[i] = String(answer[i]).replace(/[0]/g,' ');   // 0이면 공백으로 변경
    }
    return answer;
}