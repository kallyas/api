const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Router = require("./src/routes/user.route");


app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("server running at port 5000");
});

app.use("/api/v1", Router);
