//브루트포스(완전탐색)유형의 문제
function solution(answers) {
    let answer = []; 
    let user1 = []; //12345...
    let user2 = []; //21232425...
    let user3 = []; //3311224455...
    const form1 = [2, 1, 2, 3, 2, 4, 2, 5];
    const form2 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let big = 0;
    let U1 = 0;
    let U2 = 0;
    let U3 = 0;
    
    //특정 값들이 반복되는 배열을 생성해야한다.
    //단순하게 switch문으로 각 조건을 넣어서 만드는 것도 방법이긴한데 그러면 코드가 너무 길어진다. 다른 방법을 생각해보자.
    //form을 이용해서 푼다. - 아주 좋은 생각인듯하다.
    for (let i = 0; i < answers.length; i++) {
        user1.push(i % 5 + 1);
        user2.push(form1[i % 8]);
        user3.push(form2[i % 10]);
    }

    //안에 든게 answers와 맞다면 ++
    for (let i = 0; i < answers.length; i++) {
        if (user1[i] === answers[i]) {
            U1++;
        }
        if (user2[i] === answers[i]) {
            U2++;
        }
        if (user3[i] === answers[i]) {
            U3++;
        }
    }
    
    //비교해서 넣으면 끝. 삼항연산자 이용하자.
    answer.push(U1, U2, U3);
    big = Math.max(...answer);

    answer = [];
    U1 === big ? answer.push(1) : {};
    U2 === big ? answer.push(2) : {};
    U3 === big ? answer.push(3) : {};
    
    return answer;
}