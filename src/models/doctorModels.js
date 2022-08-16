const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoctorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  patientsCount: {
    type: Number,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  hospitalId: {
    type: Number,
    required: true,
  },
});

const DoctorModel = mongoose.model("psychiatrist", DoctorSchema);
module.exports = DoctorModel;
