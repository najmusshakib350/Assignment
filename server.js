const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const app = require("./app");

//Start server
const port = process.env.PORT || 8000;
app.listen(2023, function () {
  console.log(`This port number is ${port}`);
});
