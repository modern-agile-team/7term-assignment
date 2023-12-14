function solution(new_id) {
  new_id = new_id
    .toLowerCase(/[A-Z]/g)
    .replaceAll(/[^a-z0-9-_.]/g, "")
    .replaceAll(/\.+/g, ".")
    .replaceAll(/^\./g, "")
    .replaceAll(/\.$/g, "");
  new_id.length === 0
    ? (new_id = "a")
    : new_id.length >= 16
    ? (new_id = new_id.substr(0, 15))
    : new_id;
  new_id = new_id.replaceAll(/\.$/g, "");
  while (new_id.length <= 2) {
    new_id += new_id.charAt(new_id.length - 1);
  }
  return new_id;
}
