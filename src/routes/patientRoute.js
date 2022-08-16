const express = require("express");
const {
  registrationUser,
  loginUser,
} = require("../controllers/patientController");

const router = express.Router();

router.post("/registration", registrationUser);
router.post("/login", loginUser);

module.exports = router;
