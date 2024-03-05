const user = require("../model/userDetails");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

exports.register = async (req, res) => {
  try {
    let userExist = await user.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(401).json({
        success: false,
        msg: "User Already Exists",
      });
    } else {
      // Create a new user instance
      const { firstName, lastName, email, role, password } = req.body;
      let hashedPassword = await bcrypt.hash(password, 10);
      let registeredUser = new user({
        firstName: firstName,
        lastName: lastName,
        email: email,
        role: role,
        password: hashedPassword,
      });

      // Save the new user to the database
      await registeredUser.save();

      return res.status(200).json({
        success: true,
        msg: "User Registered",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userAtDB = await user.findOne({ email: email });

    if (!userAtDB) {
      return res.status(400).json({
        success: false,
        msg: "User Not Exist",
      });
    }

    const passwordMatch = await bcrypt.compare(password, userAtDB.password);

    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        msg: "PassWord not match",
      });
    }

    const paylod = {
      email: userAtDB.email,
      role: userAtDB.role,
      id: userAtDB._id,
    };


    var token = jwt.sign(paylod, process.env.JWT_SECRET, {
      expiresIn: "5s",
    });

    paylod.token = token;
    console.log(paylod);

    const cookieOption = {
      expiresIn : new Date(Date.now() + 1000*5),
      httpOnly : true
    }

    // res.cookie("token", token);
    return res.status(200).cookie("token", token,cookieOption).json({
      success: true,
      msg: "login Success",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
    });
  }
};
