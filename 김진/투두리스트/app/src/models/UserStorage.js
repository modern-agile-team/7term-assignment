"use strict";

const db = require("../config/db");

class AddTask {
  static async loadList() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM list";
      db.query(query, (err, result) => {
        if (err) reject(`${err}`);
        resolve(result);
      });
    });
  }

  static async save(client) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO list(task) VALUES(?)";
      db.query(query, [client.taskInput], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async editCheck(client) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE list SET finish = (?) WHERE id = (?)";
      db.query(query, [client.taskInput], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async deleteList(client) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM list WHERE id = (?);";
      db.query(query, [client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async editList(client) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE list SET task = (?) WHERE id = (?)";
      db.query(query, [client.dataTask, client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }

  static async checkList(client) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE list SET finish = (?) WHERE id = (?)";
      db.query(query, [client.check, client.id], (err) => {
        if (err) reject(`${err}`);
        resolve({ success: true });
      });
    });
  }
}

module.exports = AddTask;
