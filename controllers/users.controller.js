const express = require("express");
const route = express.Router();

const service = require("../services/user.service");

route.get("/get-user", (req, res) => {
  console.log("Hello World!");
  res.send("Hello World!");
});

route.post("/add-user", async (req, res) => {
  console.log("Insert User");
  console.log(req.body);
  await service.addUser(req.body);
  res.send("Insert User");
});

route.get("/get-users", async (req, res) => {
  const users = await service.getUsers();
  res.send(users);
});

module.exports = route;
