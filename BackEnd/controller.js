const Task = require("./models.js");
const Login = require("./loginModels.js");

const getAll = async (req, res) => {
  const task = await Task.find({});
  console.log("Get all is executed");
  res.json(task);
};

const postOne = async (req, res) => {
  const { name, phone, pass } = req.body;
  const phonealreadyexist = await Login.findOne({
    phone,
  });
  if (phonealreadyexist) {
    res.json({ msg: "User already exist" });
  } else {
    const task = await Login.create({
      name,
      phone,
      pass,
    });
    res.json({ msg: "Success" });
  }
};

const loginOne = async (req, res) => {
  const { name, phone, pass } = req.body;
  const phonealreadyexist = await Login.findOne({
    phone,
    pass,
  });
  if (!phonealreadyexist) {
    res.json({ msg: "User not exist" });
  } else {
    res.json({ msg: "Success" });
  }
};
module.exports = { getAll, postOne, loginOne };
