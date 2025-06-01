import express from "express";

const app = express();
const PORT = 3000;


app.get("/", (req,res)=> {
    return res.json({
        message: `Hello from Express Server🤘 ${process.pid}`
    })
})

app.listen(PORT, ()=> {
    console.log(`Server Started At PORT:${PORT}`)
});

