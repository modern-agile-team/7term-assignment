function solution(n)
{
    let sum = 0
    const nString = n.toString()  
    const nArray = nString.split('')
    
    for (let i = 0; i < nArray.length; i++){
        sum += parseInt(nArray[i])
    }                             
    return sum;
    
}