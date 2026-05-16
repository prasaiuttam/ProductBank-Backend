const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();


const dbConnect = () => {
  console.log(process.env.MONGO_URI);
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("DB connected successfully");
  });
};

module.exports = dbConnect;



