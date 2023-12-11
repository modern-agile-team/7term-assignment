function solution(participant, completion) {
participant.sort() 
completion.sort()
let obj1 = {...participant}
let obj2 = {...completion}
for(let num1 = 0; num1 <= 100000; num1++){
        if (obj1[num1] != obj2[num1]){
            return obj1[num1]
        }
    }
}
