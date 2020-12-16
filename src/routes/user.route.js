const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.get("/", (req, res, next) => {
  res.send({
    name: "Backend Server",
  });
});
//create user
router.post("/signup", userController.createUser);

module.exports = router;
