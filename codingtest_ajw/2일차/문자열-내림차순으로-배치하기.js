function solution(s) {
    
    return s.split('').sort().reverse().join('');
}
//split는 배열로 쪼개주고->sort는 순차적으로 정렬(공백이면 오름차순)
//->reverse로 오름차순 정렬된 것을 반전(내림차순)->join으로 배열을 문자열로 변환