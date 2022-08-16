const DoctorModel = require("../models/doctorModels");

exports.addDoctor = async (req, res) => {
  DoctorModel.create(req.body, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        data: data,
        message: "Doctor created",
      });
    }
  });
};

exports.getDoctor = async (req, res) => {
  DoctorModel.find({ hospitalId: req.body.hospitalId }, (err, data) => {
    if (err) {
      res.status(400).json({ error: true, message: err });
    } else {
      if (data.length == 0) {
        res.status(200).json({
          error: false,
          data: data,
          message: "No doctor found",
        });
      } else {
        let doctorInfo = [];
        let totalPatientsCount = 0;
        let pattern = {
          HospitalName: req.body.hospitalName,
          totalPsychiatristCount: data.length,
          totalPatientsCount: 0,
          psychiatristDetails: doctorInfo,
        };

        for (const i of data) {
          totalPatientsCount = totalPatientsCount + i.patientsCount;
          doctorInfo.push({
            Id: i._id,
            name: i.name,
            patientsCount: i.patientsCount,
          });
        }
        pattern.totalPatientsCount = totalPatientsCount;
        console.log(pattern);
        res.status(200).json({
          error: false,
          data: pattern,
          message: "data fetched",
        });
      }
    }
  });
};
