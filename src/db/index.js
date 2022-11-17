const mongoose = require("mongoose");
const { User } = require("./models/User");

console.log(`닷이엔브이`,process.env)

const DB_URL =
  process.env.MONGODB_URL ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.js 파일을 확인해 주세요.";

// 데이터 베이스 연결
mongoose.connect(DB_URL);


const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB 연결에 성공하였습니다.  " + DB_URL);
});

db.on("error", (err) => {
  console.error("MongoDB 연결에 실패하였습니다...\n" + DB_URL + "\n" + err);
});

exports.User = User;
