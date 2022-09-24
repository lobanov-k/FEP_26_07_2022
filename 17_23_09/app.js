const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static("public"));
app.use(express.static("node_modules"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port);
