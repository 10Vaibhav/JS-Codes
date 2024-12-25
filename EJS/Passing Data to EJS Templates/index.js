import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  res.locals.fullname = req.body.fName + req.body.lName;
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
