class Car {
  constructor(color) {
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log("drive..");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  //추가됨
  constructor(...args) {
    super(...args);
  } //추가됨
  park() {
    console.log("PARK");
  }
}

const z4 = new Bmw("blue");
//constructor가 없으면 consturctor가 있는것처럼(저 부분이 있는것처럼) 실행됨
//그러니까 자식 생성자는 무조건 부모 생성자를 호출해야만함!!!!!!!!!!!!!!!
