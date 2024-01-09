function calculator() {
    let input = document.getElementById('name').value;
    if (input === 'exit') {
        window.close();
        return false;
    }
    op4 = input;
    op4 = op4.split('');
    let op44 = [];
    op4_2 = '';
    for (let i = 0; i < op4.length; i++) {
        if (op4[i] === '+') {
            op44.push(' ');
            op44.push(op4[i]);
            op44.push(' ');
        } else if (op4[i] === '-') {
            op44.push(' ');
            op44.push(op4[i]);
            op44.push(' ');
        } else if (op4[i] === '*') {
            op44.push(' ');
            op44.push(op4[i]);
            op44.push(' ');
        } else if (op4[i] === '/') {
            op44.push(' ');
            op44.push(op4[i]);
            op44.push(' ');
        } else {
            op44.push(op4[i]);
        }
    }
    for (let i = 0; i < op44.length; i++) {
        op4_2 += op44[i];
    }
    op4_2 = op4_2.split(' ');
    console.log(op4_2);
    let result = op4_2.filter((a) => a != '');
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
            case '*':
                result.splice(i - 1, 3, Number(result[i - 1]) * Number(result[i + 1])), (i = 0);
        }
        switch (result[i]) {
            case '/':
                result.splice(i - 1, 3, Number(result[i - 1]) / Number(result[i + 1])), (i = 0);
        }
    }
    for (let i = 0; i < result.length; i++) {
        switch (result[i]) {
            case '+':
                result.splice(i - 1, 3, Number(result[i - 1]) + Number(result[i + 1])), (i = 0);
        }
        switch (result[i]) {
            case '-':
                result.splice(i - 1, 3, Number(result[i - 1]) - Number(result[i + 1])), (i = 0);
        }
    }
    document.getElementById('result').innerHTML = result[0].toFixed(2);
}

function reset() {
    if (confirm('reset?')) {
        document.getElementById('name').value = '';
    }
}
