const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/users", (req, res) => {
  const users = fs.readFileSync("users.json");
  return res.send(users);
});

app.post("/users", (req, res) => {
  // SERVER SIDE VALIDATION
  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const id = data.length === 0 ? 1 : data.at(-1).id + 1;
  const newUser = {
    id,
    ...req.body,
  };

  data.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify(data));

  return res.send(JSON.stringify(newUser));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];

  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const index = data.findIndex((user) => user.id == id);

  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync("users.json", JSON.stringify(data));
    return res.send({ message: "User was deleted." });
  } else {
    return res.status(400).send(`Not found user with id ${id}`);
  }
});

app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params["id"]);

  const users = fs.readFileSync("users.json");
  const data = JSON.parse(users);

  const newData = data.map((user) => {
    if (user.id === id) {
      user = Object.assign(user, req.body);
    }
    return user;
  });

  fs.writeFileSync("users.json", JSON.stringify(newData));
  return res.send();
});

app.listen(3000, () => {
  console.log("Server started at port :3000");
});
