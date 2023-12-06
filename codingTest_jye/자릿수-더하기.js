//n의 각 자리 숫자의 합 구하기
//배열로 만들어서 각 자리의 값을 추출한 다음에 더하면 될듯하다.
//그런데 정수가 입렵된다 -> 정수를 배열화 시키려면? split()? 
//split()은 정수를 바로 배열로 만들지 못한다.
//그럼 정수를 String형으로 만들어버리자. String(n)
//만든 String을 배열로 split() 만들자.
//베열의 각 자리의 값을 추출해서 더해버리자. for문으로 구성하면 될것같다.
//그럼 반복의 횟수를 정해야한다. length로 배열의 길이를 추출해서 이용하면 될것같다.
//더할땐 다시 정수화시켜야한다.


function solution(n) {
    let answer = 0;
    let strlength = 0;

    n = String(n);
    n = n.split('');
    strlength = n.length;
    
    for (let i = 0;i < strlength;i++){
        answer += Number(n[i]);
    }
    return answer;
}
