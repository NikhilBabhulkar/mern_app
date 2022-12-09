const User = require("./Schema");
const express = require("express");
const Router = express.Router();

Router.post("/api/user", async (req, res) => {
  const {
    Name,
    Email,
    Gender,
    Address,
    Country,
    State,
    City,
    DOB,
    Marital,
    Year_of_passing,
    img,
    Designation,
    Company_name,
    Company_address,
    Domain,
    Contribute,
  } = req.body;
  console.log(req.body);
  try {
    const userExist = await User.findOne({ Email });

    if (userExist) {
      res.status(400);
      throw new Error("This user already Exist");
    }

    const C_user = await User.create({
      Name,
      Email,
      Gender,
      Address,
      Country,
      State,
      City,
      DOB,
      Marital,
      Year_of_passing,
      img,
      Designation,
      Company_name,
      Company_address,
      Domain,
      Contribute,
    });
    res.status(201);
    res.json("Data has been added successfully");
  } catch (err) {
    console.log(err);
  }
});

Router.get("/getdata", async (req, res) => {
  res.send("Hello everyone");
  res.status(201);
});


// get data

Router.post("/user/data", async (req, res) => {
  const { Name, Email } = req.body;

  const Namepresent = User.findOne({ Name });
  const Emailpresent = User.findOne({ Email });

  if (Namepresent || Emailpresent) {
    const ufound = User.find({ Email });
    res.json({
      Name: ufound.Name,
      img:ufound.img
      
    })
      res.status(201)
  }
})

module.exports = Router;
