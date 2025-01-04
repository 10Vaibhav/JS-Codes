const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const app = express();
app.use(express.json());
const users = [];

function logger(req, res, next){
  console.log(`${req.method} request came`);
  next();
}

app.use(logger);

// localhost:3000 (to run server and front on the same port).
// __dirname -> it hold the address of my current directory, its a global variable by default.
app.get("/", (req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})


app.post("/signup",(req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "You are Signed IN",
  });

  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find(
    (u) => u.username == username && u.password == password
  );

  if (!foundUser) {
    res.json({
      message: "Credentials Incorrect",
    });
    return;
  } else {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );

    res.header("jwt", token);
    res.header("random", "vaibhav");

    res.json({
      token: token,
    });
  }
});

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, JWT_SECRET);

  if (decodedData.username) {
    // passing the Modified data of req object through the next function to the upcoming function.
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}

app.get("/me" ,auth, (req, res) => {

  const user = users.find((u) => u.username == req.username);

  res.json({
    username: user.username,
    password: user.password
  });

});

app.listen(3000, () => {
  console.log("Server is running on the port: 3000");
});
