const express = require("express");
const { registrationUser } = require("../controllers/patientController");

const router = express.Router();

router.post("/registration", registrationUser);
// router.post("/login", signUpUser);

module.exports = router;
