function solution(N, stages) {
    let obj1 = {};
    let x;
    let y;
    let arr1 = [];
    for (let i = 1; i < N + 1; i++) {
        x = stages.filter((element) => i === element).length;
        y = stages.filter((element) => i <= element).length;
        obj1[i] = x / y;
    }
    let sorted = Object.entries(obj1).sort((a, b) => b[1] - a[1]);
    for (let element of sorted) {
        arr1.push(Number(element[0]));
    }
    console.log(obj1);
    return arr1;
}
solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
