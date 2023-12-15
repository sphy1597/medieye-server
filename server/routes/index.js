const express = require("express");
const router = express.Router();
const authJwt = require("../middlewares/authJWT");
const authController = require("../controller/auth");
const refresh = require("../controller/refresh");
const budgetController = require("../controller/budget.js");
const categoryController = require("../controller/category");
const spendingController = require("../controller/spending");
const statsController = require("../controller/stats");
// 회원가입
router.post("/signup", authController.postSignup);

// 로그인
router.post("/signin", authController.postSignin);

// Test용 getUser
router.get("/getuser", authJwt, authController.getUser);

router.get("./refresh", refresh);
module.exports = router;
