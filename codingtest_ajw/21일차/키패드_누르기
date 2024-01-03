function solution(numbers, hand) {
    let answer = '';
    let keypad = {
    1 : [0, 0], 2 : [0, 1], 3 : [0, 2],
    4 : [1, 0], 5 : [1, 1], 6 : [1, 2],
    7 : [2, 0], 8 : [2, 1], 9 : [2, 2],
    '*' : [3, 0], 0 : [3, 1], '#' : [3, 2]
    }; //키패드 숫자를 키값으로 좌표를 value값으로 선언
    let leftHand = '*';  //왼손의 초기값(*) 
    let rightHand = '#'; //오른손의 초기값(#)
    let leftLength = 0;
    let rightLength = 0;
    for(let i = 0; i < numbers.length; i++){
    if(numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7 || numbers[i] === '*'){    //1, 4, 7, *은 무조건 왼손이 누름
        answer += 'L';
        leftHand = numbers[i];  
    }  
    else if(numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9 || numbers[i] === '#'){  //3, 6, 9, #은 무조건 오른손이 누름
        answer += 'R';
        rightHand = numbers[i];
    }
    else{
        const [x, y] = keypad[numbers[i]];   //result에 있는 좌표값을 x, y에 할당
        leftLength = Math.abs(keypad[leftHand][0] - x) + Math.abs(keypad[leftHand][1] - y);  //현재 왼손위치와 키패드를 누를 위치를 비교 
        rightLength = Math.abs(keypad[rightHand][0] - x) + Math.abs(keypad[rightHand][1] - y);//총 거리 =(현재위치 X - 다음에 누를 키패드 위치 X) + (현재위치 Y - 다음에 누를 키패드위치 Y) 
        if (leftLength === rightLength){ //총거리가 같으면
        if(hand === "right"){           //오른손 잡이는 오른손으로
            answer += 'R';              //왼손잡이는 왼손으로 누른다.
            rightHand = numbers[i];
    }else{
            answer += 'L'
            leftHand = numbers[i];
        }
        }else if(leftLength > rightLength){  //같지 않고 총 거리가 왼손이 더 길면
        answer += 'R'                       //오른손으로 누른다
        rightHand = numbers[i];
        }else{
        answer += 'L'
        leftHand = numbers[i];
        }
    }
    }
return answer;
}