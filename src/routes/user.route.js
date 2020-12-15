const express = express("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

//create user
router.post("/signup", userController.createUser);

module.exports = router;
