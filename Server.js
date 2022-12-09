const express = require("express");
const app = express();
const cors = require("cors/lib");
const DB = require("./Connect");
const User = require("./Router");
const path = require("path")
require("dotenv").config();


__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname,'./frontend/build')))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
  })
} else {
  
}

DB();
app.use(express.json());
app.use(cors());

app.use("/", User);

app.listen(8080, () => {
  console.log("Your application is started on port 8080");
});
