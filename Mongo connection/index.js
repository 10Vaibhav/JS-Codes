const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(
  process.env.connection
);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  try {
    await UserModel.create({
      username: username,
      password: password,
      name: name,
    });

    res.json({
      message: "You are Singed UP!!",
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    username: username,
    password: password,
  });

  console.log(user);

  if (user) {
    console.log(user._id.toString());

    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      token: token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect Credentials!!",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  const userId = req.id;
  const description = req.body.description;
  const done = req.body.done;

  try {
    await TodoModel.create({
      description: description,
      done: done,
      userId: userId,
    });

    res.json({
      userId: userId,
      message: "Todo created",
    });
  } catch (error) {
    console.log(error);
  }
});

app.get("/todos", auth, async (req, res) => {
  const userId = req.id;

    const todos = await TodoModel.find({
      userId: userId,
    });

    res.json({
      todos: todos,
    });

});

function auth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData) {
    console.log(decodedData);
    req.id = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Incorrect Credentials !!",
    });
  }
}

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
