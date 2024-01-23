function solution(n) {
    let answer = "";
    let a = "";
    for (let i = 1; i <= n; i++)
        {
            if(i%2===1)
            {
                answer = "수";
            }
            else
            {
                answer = "박";
            }
            a += answer; 
            
        }
    return a;
}