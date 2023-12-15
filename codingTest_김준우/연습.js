function solution(d, budget) {
    let total = 0;
    d.sort((a, b) =>{
        return a - b;
    });
    if(d[0]> budget){
        return 0;
    }
    for(let i =0; i<d.length; i++){
        total += d[i];
        if(total>budget){
            return i;
        }
        else if(total === budget){
            return i+1;
        }
        else if(d.length ===1){
            return 1;
        }
    }
    if(total < budget){
        return d.length
    }
}

// 예산이 정해있어 모든 물품을 구매 불가
// 최대한 많은 부서의 물품 구매
// 지원할 때는 모두 지원 1000원을 원하면 무조건 1000원 다 지원
// 최소 금액 1000원
// 신청한 금액 d 예산 budget
// 가장 많은 팀은 지원하려면 적은 예산을 원하는 팀들을 지원해야한다
