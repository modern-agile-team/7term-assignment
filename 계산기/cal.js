// let input = document.getElementById('name').value;
let input = '1 + 1 + 111 + 11111';
function calculator() {
    if (input === 'exit') {
        window.close();
        return false;
    }
}
function reset() {
    if (confirm('reset?')) {
        document.getElementById('name').value = '';
    }
}
