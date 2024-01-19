"use strict";

const db = require("../config/db");

class UserStorage {
  static async getDescription() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM tdList";
      db.query(query, (err, data) => {
        if (err) {
          reject(`${err}`);
        } else {
          // console.log("UserStorage.js의 동작");
          // console.log(data);
          resolve(data);
        }
      });
    });
  }

  static async appendDescription(description) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO tdList(id, description) VALUES(?, ?);";
      // console.log("UserStorage.js의 appendDescription 실행");
      // console.log(description);

      db.query(query, [description.id, description.description], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static async deleteDescription(description) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM tdList WHERE id = ?";

      db.query(query, [description.id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static async updateDescription(description) {
    return new Promise((resolve, reject) => {
      // console.log("UserStorage.js의 updateDescription 실행");
      // console.log(description);

      const query = "UPDATE tdList SET description = ? WHERE id = ?";

      db.query(query, [description.description, description.id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static async checkbox(description) {
    return new Promise((resolve, reject) => {
      // console.log("UserStorage.js의 checkbox실행");

      const query = "UPDATE tdList SET is_check = ? WHERE id = ?";

      db.query(query, [description.isCheck, description.id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;
