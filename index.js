const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.listen(5000, () => {
  console.log("server running at port 5000");
});

app.get("/", (req, res) => {
  res.json({ name: "backend server" });
});
