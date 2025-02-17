import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

const yourBearerToken = process.env.yourBearerToken;
const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-secret", async (req, res) => {
  const searchId = req.body.id;
  try {
    const result = await axios.get(API_URL + "/secrets/" + searchId, config);
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.message) });
  }
});

app.post("/post-secret", async (req, res) => {

  axios.post("https://secrets-api.appbrewery.com/secrets",{
    secret : req.body.secret,
    score : req.body.score,
  },config).then(function (response){
    res.render("index.ejs", { content : JSON.stringify(response.data)});
  }).catch (function (error){
    res.render("index.ejs", { content: JSON.stringify(error.message) });
  })



});

app.post("/put-secret", async (req, res) => {
  const searchId = req.body.id;

  axios.put(`https://secrets-api.appbrewery.com/secrets/${searchId}`, {
    secret: req.body.secret,
    score: req.body.score,
  },config).then(function (response){
    res.render("index.ejs", {content: JSON.stringify(response.data)});
  }).catch((error)=>{
    res.render("index.ejs", {content : JSON.stringify(error.message)});
  })

});

app.post("/patch-secret", async (req, res) => {
  const searchId = req.body.id;

  axios.patch(`https://secrets-api.appbrewery.com/secrets/${searchId}`, {
    secret: req.body.secret,
    score : req.body.score,
  },config).then((response)=>{
    res.render("index.ejs", { content : JSON.stringify(response.data)});
  }).catch((error)=>{
    res.render("index.ejs", {content : JSON.stringify(error.message)});
  })
});

app.post("/delete-secret", async (req, res) => {
  const searchId = req.body.id;

  axios.delete(`https://secrets-api.appbrewery.com/secrets/${searchId}`,config)
  .then((response)=>{
    res.render("index.ejs", {content : JSON.stringify(response.data)});
  }).catch((error)=>{
    res.render("index.ejs", {content: JSON.stringify(error.message)});
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
