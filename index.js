require('dotenv').config();
const { app } = require("./src/app.js");
require("./src/db/index");

// const PORT = SERVER_PORT || 5000;
const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
  console.log(`LISTENING ON PORT ${PORT}`);
  console.log(process.env.MONGODB_URL);
});
