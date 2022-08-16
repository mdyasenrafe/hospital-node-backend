const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  email: {
    type: String,
    required: true,
    // unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 value"],
    maxLength: [15, "Password less than 15 value"],
  },
  address: {
    type: String,
    required: true,
    // add error message for minlength
    minlength: [10, "Address must be at least 10 characters"],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "https://i.ibb.co/MGMchh7/925px-Unknown-person.jpg",
  },
  createAt: {
    type: Date,
    default: new Date(),
    required: true,
  },
  role: {
    type: String,
    default: "patient",
  },
});

const PatientModel = mongoose.model("patient", ProfileSchema);
module.exports = PatientModel;
