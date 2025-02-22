const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes")


const app = express();
const port = 3000;

connectDB();

app.get("/", (req,res)=> {
    res.send("Hello world");
})

app.use("/api", productRoutes);

app.listen(port, ()=> {
    console.log("Server is running on port ", port);
});
