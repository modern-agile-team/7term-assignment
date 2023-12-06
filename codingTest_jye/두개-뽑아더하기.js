//정수배열 numbers
//asnwer 배열안의 숫자 x가 있는지 확인하는 함수가 필요함 -> includes함수를 이용하자
//i, j로 for문 돌려서 배열 내의 값찾아가자
//일단 전부다 담고 나중에 중복되는 값들만 없애고
//오름차순 정렬시키면 끝나겠다.

function solution(numbers) {
    let answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j< numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]); //그냥 다 넣어서
        }
    }
    answer.sort((a, b) => a - b); //오름차순 정렬 후
    
    answer = [...new Set(answer)]; //중복제거
    //이 구문을 포함한 [...new] 이런 식으롤 표현되는 형식을 잘 모르겠습니다. 어떤 걸 참고해야할까요?
    
    return answer;
}