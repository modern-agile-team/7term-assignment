"use strict";
import UserStorage from "../../models/UserStorage.js";
import User from "../../models/User.js";

export default {
  output: {
    main: (req, res) => {
      res.render("home/index");
    },
  },

  process: {
    getDescription: async (req, res) => {
      const user = new UserStorage(req.body);

      const response = await user.getDescription();
      // console.log("home.ctrl.js 의 process.getDescription실행");
      // console.log(response);

      return res.json(response);
    },

    appendDescription: async (req, res) => {
      // console.log("home.ctrl.js 실행");
      const user = new User(req.body);
      // console.log(user.body);
      const response = await user.appendDescription(user.body);

      return res.status(201).json(response);
    },

    deleteDescription: async (req, res) => {
      // console.log("home.ctrl.js의 deleteDescription 실행");
      const user = new User(req.body);

      // console.log(user.body);

      const response = await user.deleteDescription(user.body);

      return res.json(response);
    },

    updateDescription: async (req, res) => {
      // console.log("home.ctrl.js의 updateDescription 실행");

      const user = new User(req.body);

      const response = await user.updateDescription(user.body);

      return res.json(response);
    },

    checkbox: async (req, res) => {
      // console.log("home.ctrl.js의 updateDescription 실행");

      const user = new User(req.body);

      const response = await user.checkbox(user.body);

      return res.json(response);
    },
  },
};
