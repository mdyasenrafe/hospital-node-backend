const bcrypt = require("bcrypt");
const PatientModel = require("../models/patientModel");
var validator = require("validator");
const { phone } = require("phone");

exports.registrationUser = async (req, res) => {
  let password = req.body.password;
  let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{8,16}$/;
  let passwordValidation = pattern.test(password);
  let email = req.body.email;
  let emailValidator = validator.isEmail(email);
  const phoneValidation = phone(req.body.phoneNumber);
  if (phoneValidation.isValid) {
    if (emailValidator) {
      if (!passwordValidation) {
        res.status(400).json({
          message:
            "password must be contain at least one uppercase letter, one lowercase letter, one number",
        });
      } else {
        PatientModel.create(req.body, (err, data) => {
          if (err) {
            if (err.message.includes("E11000")) {
              return res.status(400).json({
                message: "This Email Already Used try with another email",
                success: false,
              });
            } else {
              res.status(400).json({ error: true, message: err });
            }
          } else {
            res.status(200).json({
              status: 200,
              error: false,
              data: data,
              message: "User created",
            });
          }
        });
      }
    } else {
      res.status(400).json({
        error: true,
        message: "email is not valid",
      });
    }
  } else {
    res.status(400).json({
      error: true,
      message: "phone number is not valid",
    });
  }
};
