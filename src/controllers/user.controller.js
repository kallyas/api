const User = require("../models/users.model");
//create a new user
module.exports.createUser = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({
      username: req.body.username,
    });

    if (existingUser) {
      return res.status(400).send({ message: "username already taken" });
    }
    const existingUseremail = await User.findOne({
      useremail: req.body.useremail,
    });
    if (existingUseremail) {
      return res.status(400).send({ message: "useremail already taken" });
    }

    const user = new User(req.body);
    const result = await user.save();
    res.status(200).send({
      message: "user created successfully",
      data: {
        result,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};
