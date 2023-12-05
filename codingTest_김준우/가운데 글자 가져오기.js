function solution(s) {
    let splitS =s.split("");
    if (splitS.length%2===0)
        {
            answer = splitS[splitS.length/2-1] + splitS[splitS.length/2];
        }
    else
    {
       answer = splitS[(splitS.length-1)/2]; 
    }
    return answer;
}