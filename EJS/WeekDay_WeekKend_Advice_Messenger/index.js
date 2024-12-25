import express from "express";

const app = express();
const port = 3000;

let isWeekend = false;

function findDay(req, res, next) {
  const date = new Date();
  const day = date.getDay();

  if (day == 0 || day == 6) {
    isWeekend = true;
  }
  next();
}

app.use(findDay);

app.get("/", (req, res) => {
    let day_message = "";
    let advice_message = "";

    if(isWeekend){
        day_message = "a weekend";
        advice_message = "it's time to have fun";
    }else{
        day_message = "a weekday";
        advice_message = "it's time to work hard";
    }

  res.render("index.ejs", {
    dayType: day_message,
    advice: advice_message,
  });

});

app.listen(port, () => {
  console.log(`Server is running on Port ${port}.`);
});
