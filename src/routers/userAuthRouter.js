const express = require("express");

const { userAuthService } = require("../services/userAuthService");

const userAuthRouter = express.Router();

// 회원가입
userAuthRouter.post("/", async (req, res, next) => {
  try {
    // console.log(`회원가입 바디 확인:`, req.body);
    const { email, password, name } = req.body;
    // console.log(`회원가입 확인2:`, email, password, name);


    const userInfo = await userAuthService.addUser({
      email,
      password,
      name,
    });

    if (userInfo.errorMessage) throw new Error("회원가입 실패");

    res.status(201).json(userInfo);
  } catch (err) {
    next(err);
  }
});

// // 로그인
// userAuthRouter.post("/login", async (req, res, next) => {
//   try {
//     // console.log(`로그인 바디 확인:`, req.body);
//     const { email, password } = req.body;
//     const userLoginInfo = await userAuthService.login(email, password);

//     if (userLoginInfo.errorMessage) {
//       throw new Error("로그인 실패");
//     }

//     res.status(201).send(userLoginInfo);
//   } catch (err) {
//     next(err);
//   }
// });

exports.userAuthRouter = userAuthRouter;
