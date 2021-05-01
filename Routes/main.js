const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Donor = require("../models/donor");

router.get("/", function (req, res, next) {
  return res.render("main.ejs");
});

router.post("/", function (req, res, next) {
  console.log("Inside Signup Router");
  console.log(req.body);

  const personInfo = req.body;

  User.findOne({ username: personInfo.username }, function (err, data) {
    User.findOne({}, function (err, data) {
      var newPerson = new User({
        username: personInfo.username,
        htno: personInfo.htno,
      });

      newPerson.save(function (err, Person) {
        if (err) console.log(err);
        else console.log("Success");
      });
    })
      .sort({ _id: -1 })
      .limit(1);
    res.send({ Success: "You are regestered,You can login now." });
  });
});

router.get("/table", function (req, res, next) {

    var tabledata;
    Donor.find({}).exec((err,data) => {
        console.log("Data = ");
        console.log(data);
        return res.render("table.ejs", { 'data' : data});
    });
});

router.get("/create", function (req, res, next) {
  return res.render("create.ejs");
});

router.post("/create", function (req, res, next) {
    console.log("Inside create Router");
  console.log(req.body);

  const donorInfo = req.body;

  Donor.findOne({ name: donorInfo.name }, function (err, data) {
    Donor.findOne({}, function (err, data) {
      var newDonor = new Donor({
        name: donorInfo.name,
        phno: donorInfo.phno,
        bloodgroup: donorInfo.bloodgroup,
        desc: donorInfo.desc
      });

      newDonor.save(function (err, Person) {
        if (err) console.log(err);
        else console.log("Success");
      });
    })
      .sort({ _id: -1 })
      .limit(1);
    res.send({ Success: "Success" });
  });
});
module.exports = router;
