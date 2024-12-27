import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Mahajan";
const yourPassword = "BestFamily";
const yourAPIKey = "0334b26d-fe2d-435c-b845-873d59a84fa7";
const yourBearerToken = "cea2c115-69e9-4043-8adf-707649796833";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {

try{
  const request = await axios.get("https://secrets-api.appbrewery.com/random");
  const content = request.data;

  res.render("index.ejs", {content : JSON.stringify(content)});
}catch (error){
  console.log(error.message);
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
    console.log(error.message);
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
 }catch (error){
  console.log(error.message);
 }

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
