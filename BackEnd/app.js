const express = require("express");
const app = express();
const routes = require("./routes");
const connectDB = require("./connectDB");
const controller = require("./controller");
const cors = require("cors"); //To allow other javascripts running on the browser to send or access this url
app.use(express.json()); //Used to parsing the incoming json files
require("dotenv").config();
app.use(cors());
app.use("/api/v1", routes);
console.log(process.env);
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port);
  } catch (err) {
    console.log(err);
  }
};
start();
