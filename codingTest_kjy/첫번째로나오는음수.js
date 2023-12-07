function solution(num_list) {
    const found = num_list.find((element) => element < 0);
     if( found >= 0){
         return found;
 }
     return -1
 }