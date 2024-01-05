//처음부터 배열의 내부 개수가 1개라면 어차피 -1을 리턴하게 해야한다.
//조건에서 겹치는 숫자는 단 하나도 없다고 함 즉, 숫자끼리 같을 수 있다는 조건은 없음
//배열 오름차순 정렬후 맨앞에거 없애면? -> 이방식은 배열의 순서가 기존과 다르게 나와서 안됨
//그러면 배열의 순서는 원형을 유지하되 제일 작은걸 없애버려야함.
//객체를 이용해볼까? - 딱봐도 복잡할거라 생각.
//이중 for문도 방법이라면 방법인데.. 이걸로 해보자.
//그전에 배열의 개수가 하나인지 검사해주는 if문 추가해주자.


function solution(arr) {
    let key = 1;
    //1번째 배열이 없다면 0번쨰 배열 터트리고 -1을 추가해서 반환해라
    
    if (!arr[1]) {
        arr.pop();
        arr.push(-1);
        return arr;
    }
    
    for (let i = 0; i < arr.length; i++) {
        let count = 0; //~가 ~보다 작은 횟수
        let compare = 0; // 배열을 비교한 횟수
        for (let j = key; j < arr.length; j++) {
           
            compare++;
            if (arr[i] < arr[j]) {
                count++;
            }
        }
        // 작은 횟수가 count와 같다면 i번째를 제거해라
            if (count === compare || i === arr.length - 1) {
                arr.splice(i, 1); //i번째 하나만제거
                
                return arr;
            }
            
        //key의 역할은 이중for문의 효율성을 위한 것으로 목적임
        //하지만 배열의 길이를 넘어서는 값을 가지면 안됨 -> undefined를 가져오기 때문임.
        //key는 안의 for문을 위해 사용 -> 좀더 효율적으로 기능하게 하기 위함
        //key는 배열의 길이보다 작을때만 하나 더해줘야함
        //arr.length-1 의 이유는 그냥 arr.length 일 경우 key++되어서 다음의 배열(즉, 없는 배열)을 가리키게 됨
        if (key < arr.length - 1) {
            key++;
        }
    }
    
}