// 시뮬레이션 유형
// 입력값 문자열 - 출력값 문자열
// 정규표현식을 이용한 풀이를 해야한다.
function solution(new_id) {
    //우선 사옹자가 조건을 지켰는지 체크 지켰으면 그냥 통과시키고 안지켰으면 내가 아이디를 하나 정해서 반환해줘야함.
    //3~15 글자수 제한 확인 AND 정해진 문자만 사용했는지 확인 AND .이 양쪽끝에 있는지 없는지 확인 AND .이 2개이상 연속하는지 확인
    if (new_id.match(/^.{3,15}$/) && !(/[^a-z0-9-_.]/.test(new_id)) && !(/^\.|\.$/.test(new_id)) && !(/\.{2,}/).test(new_id)) {
        return new_id;
    }
    //1. 문자열의 소문자화.
    new_id = new_id.toLowerCase();
    //2. 알파벳 소문자, 숫자, 뺴기, 밑줄, 마침표 제외하고 모든 문자 제거
    //문자열.match(/정규식/플래그) 문자열에서 정규식에 매칭되는 항목들을 배열로 반환
    new_id = new_id.match(/[a-z0-9-_.]/gm); //얘가 여기서 배열로 반환하니깐
    new_id = new_id.join(''); //여기서 다시 문자열로 만들어주고
    //3. 마침표가 2번 이상 연속된 부분을 하나의 마침표로 만들기
    //문자열.replace(/정규식/, "대체문자열") -> 정규식에 매칭되는 항목을 대체문자열로 반환
    new_id = new_id.replace(/\.{2,}/gm, ".");
    //4. 마침표가 처음이나 끝에 위치한다면 제거
    new_id = new_id.replace(/^\.|\.$/gm, "");
    //5. 빈 문자열이라면 즉, 아무것도 없다면 a넣기
    if (!(new_id)) {
        new_id += 'a';
    }
    //6. 16자 이상이면 16자부터 다 제외 이후에 15번째에 .이 있다면 제거
    new_id = new_id.split("");
    for (let i = new_id.length - 1; i > 14; i--) {
        new_id.pop();
    }
    if (new_id[14] === '.') {
        new_id.pop();
    }
    //7. 2자 이하라면 마지막 문자를 길이가 3이 될 때까지 붙이기
    if (new_id.length <= 2) {
        for (let i = new_id.length - 1; i < 2; i++) {
            new_id.push(new_id[i]);
        }
    }
    new_id = new_id.join('') //여기서 다시 문자열로 만들어주고
    return new_id;
}
