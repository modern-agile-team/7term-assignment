function solution(arr) {
    let arr1 = []
    if (arr.length === 1){
        return [-1]
    }
    let num
    num = arr.indexOf(Math.min(...arr))
    arr.splice(num,1)
    return arr
}