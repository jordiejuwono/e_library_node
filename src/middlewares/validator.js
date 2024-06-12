const { isEmail, isStrongPassword } = require("validator");
const { user: UserModel } = require("../models");

const validateRegister = async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).send({
            message: "Name, email, and password are required",
            data: null,
        });
    }

    if (!isEmail(email)) {
        return res.status(400).send({
            message: "Invalid Email",
            data: null,
        });
    }

    if (!isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
    })) {
        return res.status(400).send({
            message: "Password is too weak. Password must contains 8 characters, 1 lowercase, 1 uppercase, and minimum 1 number",
            data: null,
        });
    }

    const emailCheck = await UserModel.findOne({
        where: { email },
    });
    if (emailCheck) {
        return res.status(400).send({
            message: "Email already registered",
            data: null,
        });
    }

    next();
}

const validateLogin = (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
        console.log(email);
        console.log(password);
      return res.status(400).send({
        message: "Email and password are required",
        data: null,
      });
    }
  
    if (!isEmail(email)) {
      return res.status(400).send({
        message: "Invalid email",
        data: null,
      });
    }
  
    next();
};

module.exports = { validateRegister, validateLogin };