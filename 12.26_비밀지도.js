function solution(n, arr1, arr2) {
    let arr3 = [],
        arr4 = [],
        arr5 = [];
    for (let i = 0; i < n; i++) {
        arr4.push(arr1[i].toString(2).padStart(n, '0'));
        arr5.push(arr2[i].toString(2).padStart(n, '0'));
        arr3.push('');
        for (let j = 0; j < n; j++) {
            if (arr4[i][j] === '1' || arr5[i][j] === '1') {
                arr3[i] += '#';
            } else {
                arr3[i] += ' ';
            }
        }
    }
    return arr3;
}