"use strict";

import UserStorage from "./UserStorage.js";

export default class User {
  constructor(body) {
    this.body = body;
  }

  async getDescription() {
    const td = await UserStorage.getDescription();
    // console.log("User.js의 getDescription 동작");
    // console.log(td);
    return td;
  }

  async appendDescription(data) {
    // console.log("User.js의 User class의 appendDescription 실행");
    // console.log(data);

    let key = await UserStorage.appendDescription(data);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }

  async deleteDescription(data) {
    let key = await UserStorage.deleteDescription(data);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }

  async updateDescription(data) {
    let key = await UserStorage.updateDescription(data);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌
    console.log(data);

    return key;
  }

  async checkbox(data) {
    let key = await UserStorage.checkbox(data);
    //반환값 안줘도 되는데 catch문 때문에 그냥 줌

    return key;
  }
}
