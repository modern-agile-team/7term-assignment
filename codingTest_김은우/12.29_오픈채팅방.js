function solution(record) {
    let record1 = [],
        obj1 = {},
        record2 = [];
    for (let i = 0; i < record.length; i++) {
        record1.push(record[i].split(' '));
        if (record1[i][2]) obj1[record1[i][1]] = record1[i][2];
    }
    for (let i = 0; i < record.length; i++) {
        if (record1[i][0] === 'Enter') {
            record2.push(`${obj1[record1[i][1]]}님이 들어왔습니다.`);
        } else if (record1[i][0] === 'Leave') {
            record2.push(`${obj1[record1[i][1]]}님이 나갔습니다.`);
        }
    }
    return record2;
}
