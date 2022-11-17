const { UserModel } = require("../schemas/user");

const User = {
  // 회원가입
  create: async (newUser) => {

    console.log(`models의 User의 newUser`, newUser);

    const createdNewUser = await UserModel.create(newUser);

    console.log(`models의 User의 createdNewUser`, createdNewUser);
    
    return createdNewUser;
  },

  findByEmail: async (email) => {
    console.log(`User 모델 확인:`, email);

    let user = await UserModel.findOne(
      { email },
      "_id email password name"
    ).lean();

    if (user) user = responseInfo(user);

    return user;
  },
};

exports.User = User;
