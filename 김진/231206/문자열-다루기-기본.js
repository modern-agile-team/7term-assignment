function solution(s) {
  if (String(s).length === 4 || String(s).length === 6) {
    for (let i = 0; i < String(s).length; i++) {
      if (isNaN(String(s)[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
