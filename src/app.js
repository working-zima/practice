const express = require("express");
const app = express();

const { userAuthRouter } = require('./routes/userAuthRouter');

MongoClient.connect('mongodb+srv://elice:<1234>@ai-team12.hoctmas.mongodb.net/test')

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/users", userAuthRouter);

app.get("/", (req, res) => {
  res.send("페이지에 접속 하셨습니다.");
});

app.get("*", (req, res) => {
  res.send("죄송합니다. 유효하지 않은 요청입니다.");
});

app.listen(PORT, () => {
  console.log("LISTENING ON PORT 3000");
});


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