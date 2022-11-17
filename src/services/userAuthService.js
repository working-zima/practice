const { User } = require("../db/models/User");

const userAuthService = {
  addUser: async (newUser) => {
    // console.log(`userAuthService의 newUser:`, newUser);

    const createdNewUser = await User.create(newUser);

    createdNewUser.errorMessage = null;

    return createdNewUser;
  },

  // login: async (email, password) => {
  //   const userInfo = await User.findByEmail(email);

  //   if (!userInfo) throw new Error("이메일이 없습니다.");

  //   const currentPasswordHash = userInfo.password;
  //   const isPasswordcurrent = await bcrypt.compare(
  //     password,
  //     currentPasswordHash
  //   );

  //   if (!isPasswordcurrent) throw new Error("비밀번호가 일치하지 않습니다.");

  //   const secretKey = JWT_SECRET_KEY || "jwt-secret-key";
  //   const token = jwt.sign({ userId: userInfo.userId }, secretKey);
  //   const { userId, name } = userInfo;
  //   const loginUser = { token, userId, email, name };

  //   loginUser.errorMessage = null;

  //   return loginUser;
  // },
};

exports.userAuthService = userAuthService;

// 업데이트 (불변성을 해치는) 더 좋은 방법은?
// app.patch('comments/:id', (req, res) => {
//   const { id } = req.params;
//   const newCommentText = req.body.comment;
//   const foundComment = comments.find(c => c.id === id);
//   foundComment.comment = newCommentText;
// });

// app.delete('comments/:id', (req, res) => {
//   const { id } = req.params;
//   comments = comments.filter(c => c.id !== id);
// });
