//다트
//각 기회마다 얻을 수 있는 점수는 0~10점
//S, D, T 는 각각 1제곱 2제곱 3제곱을 해준다.
//*는 해당 점수와 바로 전에 얻은 점수를 2배로 만든다.
// #은 해당점수가 마이너스가 된다.
//스타상이 첫 시도에서 나오면 첫 시도의 점수만 2배가된다.
//스타상의 효과는 다른 스타상과 중첩될수 있다. 이 경우에는 중첩된 스타상 점수는 4배가된다.
// 스타상의 효과는 아차상의 효과와 중첩될수 있다. 이 경우 중첩된 아차상의 점수는 -2배가 된다.
//SDT는 점수마다 하나씩 존재 총 합치면 30개가 있다 S 10개 D 10개 T 10개
//스타상 * 과 아차상 #은 점수마다 둘 중하나만 존재 할 수 있고, 존재하지 않을 수도있다.
let dartResult = "1S*2D#10S*";

function solution(dartResult) {
    let answer = 0;
    let key = [];           //핵심적으로 사용될 변수
    let sign = [1, 1, 1];   //기호를 결정하는데 사용할 변수
    let final = [];         //마지막 처리된 수를 담는데 사용할 변수

    //여기서 정규표현식을 통해 점수, 알파벳, 기호가 한묶음씩 되도록 만든것들을 key라는 배열안에 넣어주었다. (배열안의 배열이 됨)
    key = dartResult.match(/[0-9]{0,2}[D-T]/g);
    
    //이제 key를 한문자열로 만들었고
    key = key[0] + key[1] + key[2];
    //dartResult를 후에 써먹기 위해 split으로 배열의 형태로 만들어 주었다.
    dartResult = dartResult.split('');
    
    //여기는 만들어진 dartResult의 배열을 이용하여 조건문에 집어넣고 *이면 sign 배열에 2를, #이면 -1을 넣는 작업을 했다.
    for(let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] === "*") {
            if (i >= 2 && i <= 3) {
                sign[0] = 2;
            } else if (i >= 4 && i <= 5) {
                sign[1] = 2;
            } else {
                sign[2] = 2;
            }
        } else if (dartResult[i] === "#") {
            if (i >= 2 && i <= 3) {
                sign[0] = -1;
            } else if (i >= 4 && i <= 5) {
                sign[1] = -1;
            } else {
                sign[2] = -1;
            }
        }
    }

    //스타가 뒤에 있을 경우 앞에 *2를 해준다.
    if (sign[1] === 2) {
        sign[0] = sign[0] * 2;
    }
    if (sign[2] === 2) {
        sign[1] = sign[1] * 2;
    }

    //비교 및 치환을 위해 문자열에서 배열로 변경
    key = key.split('');
    
    for (let i = 0; i < key.length; i++) {
        switch (key[i]) {
            case "S" :
                key[i] = "1";
                break;
            case "D" :
                key[i] = "2";
                break;
            case "T" :
                key[i] = "3";
        }
    }

    //이제 써먹으려고 배열을 숫자형으로 바꿨다.
    key = key.map(Number)

    //이제 거의 완성된 key의 값을 제곱처리까지 해주고 final값에 넣어준다.
    for(let i = 0; i < key.length; i++) {
       if (key[i] === 1 && key[i + 1] === 0) {  //10일 경우
           final.push(10 ** key[i + 2]);
           i += 2;                      //10은 인덱스에서 2칸을 차지한다. 그래서 +2를 해주었다.
       }
        else {                                  //1~9일 경우
            final.push(key[i] ** key[i + 1]);
            i++;
        }
    }

    //최종적으로 완성된 final과 sign을 잘 answer에 넣고 잘 버무려주면 완성이다.
    for (let i = 0; i < 3; i++) {
        answer += final[i] * sign[i];
    }
    return answer;
}
