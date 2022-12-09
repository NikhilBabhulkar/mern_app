const mongoose = require("mongoose");

const connect = async () => {
  mongoose
    .connect(
      "mongodb+srv://nikhil:nikhil@cluster0.x7p2hfa.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }
    )
    .then(() => {
      console.log("Connected with db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
