const express = require("express");
const { addDoctor, getDoctor } = require("../controllers/doctorController");

const router = express.Router();

router.post("/add", addDoctor);
router.post("/get", getDoctor);

module.exports = router;
