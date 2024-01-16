function input(){
    let number = document.getElementById('number').value;
    console.log(number);
    if(number.toLowerCase() === 'exit'){
        console.log(number);
        window.close();
        return false;
        //open(location, '_self').close();
        //return false;
    } 
    number = number.replace(/\s/g, "");
    let multiplyResult = 0;
    let divideResult = 0; 
    let addResult = 0;
    let subtractResult = 0;
    try{
    for(let i = 0; i < number.length; i++){
        switch (number[i]){
            case '*' :
                multiplyResult = multiply(Number(number[i - 1]), Number(number[i + 1]));
                console.log(multiplyResult);
                number = number.replace(/\d+\*\d+/, multiplyResult);
                i--
                break;
            case '/' :
                divideResult = divide(Number(number[i - 1]), Number(number[i + 1]));
                console.log(divideResult);
                number = number.replace(/\d+\/\d+/, divideResult);
                i--
                break;
        }
    }
    for(let j = 0; j < number.length; j++){
        switch (number[j]){
            case '+' :
                addResult = add(Number(number[j - 1]), Number(number[j + 1]));
                console.log(addResult);
                number = number.replace(/\d+\+\d+/, addResult);
                j--
                break;
            case '-' :
                subtractResult = subtract(Number(number[j - 1]), Number(number[j + 1]));
                console.log(subtractResult);
                number = number.replace(/\d+\-\d+/, subtractResult);
                j--
                break;
    }
}
    document.getElementById('result').innerText =  number; //결과값 html에 출력
} catch(number){
    document.getElementById('result').innerText =  '오류!'; 
}
return false; 
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
