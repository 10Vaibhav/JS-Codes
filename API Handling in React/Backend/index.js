import express from "express";

const app = express();

const port = 3000;

app.get("/api/products", (req,res)=> {
    console.log.apply("reach here");
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})