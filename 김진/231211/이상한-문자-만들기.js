function solution(s, result = "") {
  for (let i of s.split(" ")) {
    for (let j = 0; j < i.length; j++) {
      if (j % 2 === 0) {
        result += i[j].toUpperCase();
      } else {
        result += i[j].toLowerCase();
      }
    }
    result += " ";
  }
  return result.substr(0, result.length - 1);
}
