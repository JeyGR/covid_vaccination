const express = require("express");
const routes = express.Router();
const { getAll, postOne, loginOne } = require("./controller");

routes.route("/tasks").get(getAll);
routes.route("/signin").post(postOne).get(loginOne);
routes.route("/login").post(loginOne);

module.exports = routes;
