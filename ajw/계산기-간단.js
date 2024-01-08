function input() {
    // 입력값 가져오기
    let expression = document.getElementById('expression').value;

    // 'exit' 입력 시 종료
    if (expression.toLowerCase() === 'exit') {
        window.close();
        alert('계산기를 종료합니다.');
        return false; 
    }
    try {
        // 계산 수행 및 결과 표시
        let result = eval(expression).toFixed(2);
        document.getElementById('result').innerText = '결과: ' + result;
    } catch (error) {
        // 오류 발생 시 메시지 표시
        document.getElementById('result').innerText = '오류가 발생했습니다.';
    }
    return false;
}
