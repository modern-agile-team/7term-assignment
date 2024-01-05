// 얘는 그냥 각나오네
// split(' ')으로 각 단어 뽑아내자
// 여기도 2중 for문 쓰면 먹힐법하다 근데 그만쓰자 너무 자주쓴다.
//문제에서 입력으로 소문자만 들어간다는 보장을 해주지 않았다.
//소문자 대문자 처리 둘다 해줘야한다.
//뽑은 문자열들을 다시 배열화 시켜주자. 비교하기위해서.
// 2중for문 쓰자...

function solution(s) {
    
    s = s.split(' '); //문자열 n개로 구성된 배열탄생
    
    //문자열들 배열화시키기
    for (let i = 0; i < s.length; i++) {
        s[i] = [...s[i]];
    }
    
    //나는 이중for문을 사랑한다... 그것도 많이...
    
    //배열의 각 요소별 처리해주고
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            if (j % 2 === 0) {
                s[i][j] = s[i][j].toUpperCase();
            } else {
                s[i][j] = s[i][j].toLowerCase();
            }
        }
    }
    
    //배열안의 배열을 다시 초기 상태로 만들어서
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].join('');
    }
    
    //문자 띄어쓰기 하면서 합쳐주기
    s = s.join(' ');
    
    return s;
}
//14