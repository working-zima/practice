const { Router } = require("express");

const { userService } = require("../services/userAuthService");

const userRouter = Router();

// 로그인
userRouter.post("/login", async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const userLoginInfo = await userService.login(email, password);

    if(userLoginInfo.errorMessage) {
      throw new Error("로그인 실패"); 
    }

    res.status(201).send(userLoginInfo);
  } catch(err) {
    next(err);
  }
})

export { userRouter }