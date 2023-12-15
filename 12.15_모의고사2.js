function solution(answers) {
    let arr1 = [1,2,3,4,5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let arr4 = [0,0,0]
    for(let i = 0; i < answers.length; i++){
        if (arr1[i % arr1.length] === answers[i]){
            arr4[0]++;
        }
        if (arr2[i % arr2.length] === answers[i]){
            arr4[1]++;
        }
        if (arr3[i % arr3.length] === answers[i]){
            arr4[2]++;
        }
    }
    let arr5 = [];
    let Maxindexnum = arr4.indexOf(Math.max(...arr4));
    if (arr4[Maxindexnum] != arr4[Maxindexnum+1] && arr4[Maxindexnum] != arr4[Maxindexnum-1] && arr4[Maxindexnum] != arr4[Maxindexnum+2]){
        arr5.push(Maxindexnum+1)
    }
    else if (arr4[0] === arr4[1] && arr4[1] === arr4[2]){
        arr5.push(1,2,3);
    }
    else if (arr4[0] === arr4[1]){
        arr5.push(1,2);
    }
    else if (arr4[1] === arr4[2]){
        arr5.push(2,3);
    }
    else if (arr4[0] === arr4[2]){
        arr5.push(1,3);
    }
    return arr5;
}