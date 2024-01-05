function solution(numbers, hand) {
    let lh = '*',
        rh = '#',
        result = '',
        middle = 0;
    let obj1 = {
        1: [0, 0],
        2: [0, 1],
        3: [0, 2],
        4: [1, 0],
        5: [1, 1],
        6: [1, 2],
        7: [2, 0],
        8: [2, 1],
        9: [2, 2],
        '*': [3, 0],
        0: [3, 1],
        '#': [3, 2],
    };
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
            result += 'L';
            lh = numbers[i];
        } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
            result += 'R';
            rh = numbers[i];
        } else if (numbers[i] === 2 || numbers[i] === 5 || numbers[i] === 8 || numbers[i] === 0) {
            if (
                Math.abs(obj1[numbers[i]][0] - obj1[lh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[lh][1]) <
                Math.abs(obj1[numbers[i]][0] - obj1[rh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[rh][1])
            ) {
                result += 'L';
                lh = numbers[i];
            } else if (
                Math.abs(obj1[numbers[i]][0] - obj1[lh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[lh][1]) >
                Math.abs(obj1[numbers[i]][0] - obj1[rh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[rh][1])
            ) {
                result += 'R';
                rh = numbers[i];
            } else if (
                Math.abs(obj1[numbers[i]][0] - obj1[lh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[lh][1]) ===
                    Math.abs(obj1[numbers[i]][0] - obj1[rh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[rh][1]) &&
                hand === 'left'
            ) {
                result += 'L';
                lh = numbers[i];
            } else if (
                Math.abs(obj1[numbers[i]][0] - obj1[lh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[lh][1]) ===
                    Math.abs(obj1[numbers[i]][0] - obj1[rh][0]) + Math.abs(obj1[numbers[i]][1] - obj1[rh][1]) &&
                hand === 'right'
            ) {
                result += 'R';
                rh = numbers[i];
            }
        }
    }
    return result;
}
