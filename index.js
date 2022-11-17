require('dotenv').config();
const { app } = require("./src/app.js");


const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log(process.env.MONGODB_URL);
});
