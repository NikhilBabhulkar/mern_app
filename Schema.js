const mongoose = require("mongoose");

const Usercollection = mongoose.Schema({
  Name: { type: String, requied: true },
  Email: { type: String, required: true },
  Gender: { type: String, requied: true },
  Address: { type: String, requied: true },
  Country: { type: String, requied: true },
  State: { type: String, requied: true },
  City: { type: String, requied: true },
  DOB: { type: String, requied: true },
  Marital: { type: String, requied: true },
  Year_of_passing: { type: String, requied: true },
  img: { type: String, requied: true },
  Designation: { type: String, requied: true },
  Company_name: { type: String, requied: true },
  Company_address: { type: String, requied: true },
  Domain: { type: String, requied: true },
  Contribute: { type: String, requied: true },
});

const Allumnidata = mongoose.model("userdata", Usercollection);
module.exports = Allumnidata;