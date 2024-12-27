import express from "express";
import axios from "axios";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = process.env.yourUsername ;
const yourPassword = process.env.yourPassword ;
const yourAPIKey = process.env.yourAPIKey;
const yourBearerToken = process.env.yourBearerToken;

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {

try{
  const request = await axios.get("https://secrets-api.appbrewery.com/random");
  const content = request.data;

  res.render("index.ejs", {content : JSON.stringify(content)});
}catch (error){
  console.log(error.message)
}

});

app.get("/basicAuth", async(req, res) => {

  try{
    const request = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username : yourUsername,
        password : yourPassword,
      }
    });
    const content = request.data;
    res.render("index.ejs", {content: JSON.stringify(content)});
  }catch (error){
    console.log(error.message);
  }

});

app.get("/apiKey", async(req, res) => {

  try{
  const request = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)
  const data = request.data;
  res.render("index.ejs", {content : JSON.stringify(data)});
  }catch (error){
    console.log(error)
  }

});

app.get("/bearerToken", async(req, res) => {
 try{
  
  const request = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
    headers: {
      Authorization: `Bearer ${yourBearerToken}`
    },
  });
  const data = request.data;
  res.render("index.ejs", {content : JSON.stringify(data)});
 }catch(error){
  console.log(error.message);
 }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
