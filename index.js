const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3977;

const { LOGIN, HOME, BILLS } = require("./constants");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.post("/login", cors(), (req, res) => {
  if (
    req.body?.email === LOGIN.email &&
    req.body?.password === LOGIN.password
  ) {
    res.json({ status: 200, access: true });
  } else {
    res.json({ status: 401, access: false });
  }
});

app.post("/register", cors(), (req, res) => {
  res.json({ status: 200, access: true });
});

app.get("/home", cors(), (req, res) => {
  res.json(HOME);
});

app.get("/bills", cors(), (req, res) => {
  res.json(BILLS);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
