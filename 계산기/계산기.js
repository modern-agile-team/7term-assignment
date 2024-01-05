function input(){
// let number = document.getElementById('number');
let multiplyResult = 0;
let divideResult = 0;
let addResult = 0;
let removeRuslt = 0;
// number = number.value;
let number = '1 + 5 - 2 + 3 * 1 / 2'
number = number.replace(/(\s*)/g,"");
console.log(number);
for(let i = 0; i < number.length; i++){
    if(number.indexOf('*') < number.indexOf('/') && number.indexOf('*') !== -1 ){
    multiplyResult += multiply(number[number.indexOf('*') - 1], number[number.indexOf('*') + 1]);
}if(number.indexOf('/') !== -1){
    divideResult += divide(number[number.indexOf('/') - 1], number[number.indexOf('/') + 1 ]);
}if(number.indexOf('+') < number.indexOf('-') && number.indexOf('+') !== -1){
    addResult += add(number[number.indexOf('+') - 1], number[number.indexOf('+') + 1]);
    console.log(addResult);
}else{
    removeRuslt += remove(number[number.indexOf('-') - 1], number[number.indexOf('-') + 1]);
}
}
let result = Number(multiplyResult) + Number(divideResult) + Number(addResult) + Number(removeRuslt);
}
function multiply(x , y){
    return (x * y);
}
function divide(x, y){
    return (x / y);
}
function add(x, y){
    return (x + y);
}   
function remove(x, y){
    return (x - y);
}input();