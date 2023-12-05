function solution(s) {
    let p = 0;
    let y = 0;
    for (let spell of s) {        
        if (spell === 'p'||spell==='P') 
            p += 1;
        if (spell === 'y'||spell==='Y')
            y += 1;
    }
    return (p === y) ? true : false;
}
console.log(solution('pPoooyY'));
console.log(solution('Pyy'));