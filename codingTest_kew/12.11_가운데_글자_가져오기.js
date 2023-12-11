function solution(s) {
    let arr = s.split('');
    let str1 = '';
    if(arr.length % 2 === 0){
        str1 = arr[arr.length/2-1] + arr[arr.length/2]
    }
    else{
        str1 = arr[arr.length * 0.5 - 0.5]
    }
    
    return str1;
}

