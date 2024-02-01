"user strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/to-do-list", ctrl.output.toDoList);

router.post("/to-do-list-c", ctrl.process.createToDoList);
router.post("/to-do-list-d", ctrl.process.deleteToDoList);
router.post("/to-do-list-e", ctrl.process.editToDoList);
router.post("/to-do-list-c", ctrl.process.checkToDoList);

module.exports = router;
