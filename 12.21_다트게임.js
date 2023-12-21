function solution(dartResult) {
    let arr1 =  dartResult.split('')
    let anwser = 0;
    for(let i = 0; i < 12; i++){
      if (arr1[i] === '1' && arr1[i+1] === '0'){
        arr1.splice(i,2,10)
      }
    } //1,0 10으로 만들어주는거
    for(let i = 0; i < 12; i++){
      if (typeof(arr1[i]) === 'string'){
        switch(arr1[i]){
          case 'S':
          arr1.splice(i-1,2,arr1[i-1] * 1);
          break;
          case 'D':
          arr1.splice(i-1,2,arr1[i-1] ** 2)
          break;
          case 'T' :
          arr1.splice(i-1,2,arr1[i-1] ** 3)
          break;
        }
      } // 보너스 계산
        if (arr1[1] === '*'){
      arr1.splice(0,2,arr1[i-1]*2)
    }
      else if (arr1[i] === '*'){
        arr1.splice(i-1,2,arr1[i-1]*2)
        arr1.splice(i-2,1,arr1[i-2]*2)
      }
      else if (arr1[i] === '#'){
        arr1.splice(i-1,2,arr1[i-1] * -1)
      }
  }//옵션
      answer = arr1[0]+arr1[1]+Number(arr1[2])
    return answer;
  }