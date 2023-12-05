function solution(s){
    if (s.split(/p/gi).length-1 == s.split(/y/gi).length-1)
    {
     return true;
    }
    else
    {
     return false;   
    }
}
console.log( numPY("pPoooyY"));
console.log( numPY("Pyy"));