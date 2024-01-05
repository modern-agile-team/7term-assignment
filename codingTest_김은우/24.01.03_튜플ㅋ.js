function solution(s) {
    let obj1 = {},
        arr1 = [],
        arr2 = [],
        anwser,
        anwser1;
    let arr = s.slice(2, s.length - 2).split('},{');
    let map1 = arr.map((data) => {
        const temp = data.split(',');
        const temp2 = temp.map((x) => Number(x));
        return temp2;
    });
    for (let i = 0; i < map1.length; i++) {
        obj1[map1[i].length] = map1[i];
    }
    for (let i = 1; i < map1.length + 1; i++) {
        arr1.push(obj1[i]);
    }
    for (let i = 0; i < map1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
            arr2.push(arr1[i][j]);
        }
        anwser = new Set(arr2);
        anwser1 = [...anwser];
    }
    return anwser1;
}
