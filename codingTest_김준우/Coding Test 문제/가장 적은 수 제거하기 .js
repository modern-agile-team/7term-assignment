function solution(arr) {
  let answer = [];
  let firstIndex = 0;
  if (arr.length === 1) {
    answer = [-1];
  } 
  else{
    firstIndex = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(firstIndex > arr[i]){
            firstIndex = arr[i];
        }
    }
    answer = arr.filter((element) => 
        element !== firstIndex
    );
     
  } return answer;
}
// 가장 작은 수를 제거 해야 함 리턴값은 그 수를 제거하고 리턴하면 된다
// 리턴하려는 배열이 빈 배열인 경우 (== 인덱스가 하나밖에 없을때)
