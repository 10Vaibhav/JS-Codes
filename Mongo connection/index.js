const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { z } = require("zod");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

mongoose.connect(process.env.connection);

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    username: z.string().min(3).max(100).email(),
    password: z.string().min(3).max(100),
    name: z.string().min(3).max(30),
  });

  // const parseData = requiredBody.parse(req.body); // it throw an error if not safely parse while safeParse doesn't throw an error
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);

  /*
{
      success : true | false,
      data: {},
      errors: []
}
  */

  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect format!!",
      error: parsedDataWithSuccess.error,
    });
    return;
  }

  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({
      username: username,
      password: hashedPassword,
      name: name,
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "User already exists!!",
    });
    errorThrown = true;
  }

  if (!errorThrown) {
    res.json({
      message: "You are Singed UP!!",
    });
  }
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    username: username,
  });

  if (!user) {
    res.status(403).json({
      message: "User does not exist in our DB!!",
    });

    return;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
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

  try {
    const todos = await TodoModel.find({
      userId: userId,
    });

    res.json({
      todos: todos,
    });
  } catch (error) {
    console.log(error);
  }
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
