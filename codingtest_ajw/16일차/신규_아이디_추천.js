function solution(new_id) {
    let answer = '';
    let step1 = /[A-Z]/g;  //대문자 찾기
    let step2 = /[^a-z0-9-_.]/g; //소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 문자 제거
    let step3 = /\.+/g;  //마침표 2개 이상이면 1개로 고정
    let step4_1 = /^[\.]/; //첫 번째 마침표 찾기
    let step4_2And6 = /[\.]$/; //마지막 마침표 찾기
    let step5 = /\s/;  //공백 찾기
    let step7 = /.$/g; //마지막 문자 찾기
    answer = new_id.toLowerCase(new_id.match(step1));  //1단계 모든 대문자를 소문자로 치환
    answer = answer.replace(step2, ''); //2단계 소문자, 숫자, 빼기, 밑줄, 마침표를 제외한 문자 제거
    answer = answer.replace(step3, '.'); //3단계 마침표가 2개이상이면 1개로 고정
    answer = answer.replace(step4_1, '').replace(step4_2And6, ''); //4단계 첫 번째 마침표, 마지막 마침표 제거
    if(step5.exec(answer) === null && answer.length <= 0){   //5단계 공백이면 a추가(exec함수를 사용하니 null값이어서 이렇게 선언)
    answer = 'a';                                       // length 를 0보다 작거나 같다고 해야 다른 문장들이 a로 안 바뀜
    }
    if(answer.length >= 16){  //6단계 문자열이 15 이상 넘어가면 자르기 마지막에 마침표면 마침표 제거
    answer = answer.slice(0, 15).replace(step4_2And6, ''); 
    };
    if(answer.length <= 2){  //7단계 마지막 문자열 추가 padEnd함수는(3 = 최댓값, 추가할 값)
        answer = answer.padEnd(3, answer.match(step7));
        }
    return answer;
}