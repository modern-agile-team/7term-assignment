"use strict";
import express from "express";
import ctrl from "./home.ctrl.js";

const router = express.Router();

//데이터 조회 GET
router.get("/", ctrl.output.main);
router.get("/lists", ctrl.process.getDescription);

//데이터 생성 POST
router.post("/lines", ctrl.process.appendDescription);

//데이터 수정 PATCH
router.patch("/descriptions", ctrl.process.updateDescription);
router.patch("/checkboxes", ctrl.process.checkbox);

//데이터 삭제 DELETE
router.delete("/lines", ctrl.process.deleteDescription);

export default router;
