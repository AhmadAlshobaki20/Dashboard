const { compare } = require("bcrypt");
const Admin = require("./../model/Admin");
const jwt = require("jsonwebtoken");

const signing = (id, PRIVATE_KEY) => {
  return jwt.sign({ id: id }, PRIVATE_KEY, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};

// create register function to Admin
exports.adminRegister = async (req, res) => {
  try {
    const admin = await Admin.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const token = signing(admin._id, process.env.PRIVATE_KEY);
    res.status(201).json({
      status: "success",
      token: token,
      data: {
        admin: admin,
      },
    });
  } catch (error) {
    res.status(404).json({
      massage: error,
    });
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    //1) check if the email and password exist
    if (!email || !password) {
      return res.status(400).json({
        message: "email or password is not exist",
      });
    }
    //2) check user and password is correct
    const admin = await Admin.findOne({ email }).select("+password"); // explicity select
    // the correctPassword function will available on all document into certain collection
    const correct = await admin.correctPassword(password, admin.password);
    if (!correct) {
      return res.status(404).json({
        message: "password or email invalid",
      });
    }
    // 3) if everything Ok
    const token = signing(admin._id, process.env.PRIVATE_KEY);
    return res.status(200).json({
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error,
    });
  }
};
