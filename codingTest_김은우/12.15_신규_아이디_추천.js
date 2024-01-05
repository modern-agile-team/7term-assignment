function solution(new_id){
    let step1 = new_id.toLowerCase();
    let step2 = /[\w._-]/g;
    let step3 = step1.match(step2).join('');
    let step4 = step3.replace(/\.\.+/g,'.');
    let step5 = step4.replace(/^\.|\.$/g,'');
    (step5 === '') ? step5 = 'a' : step5;
    let step6;
    (step5.length >= 16) ? step6 = step5.substr(0,15) : step6 = step5;
    let step6_5 = step6.replace(/\.$/,'');
        let num1 = step6_5.charAt(step6_5.length-1);
        if (step6_5.length <= 2){
            for(step6_5.length; step6_5.length <= 2;){
            step6_5 += num1;
            }
        }
       return step6_5;
    }