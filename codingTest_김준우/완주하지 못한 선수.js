function solution(participant, completion) {
  let answer = "";
  participant = participant.sort();
  completion = completion.sort();

  completion.push("");
  
  for(let i = 0; i<participant.length; i++){
         if(participant[i] !== completion[i]){
             answer = participant[i];
             break;
         }
      } return answer;
}