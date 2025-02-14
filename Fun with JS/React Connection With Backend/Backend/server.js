import  express from "express";

const app = express();

app.get("/", (req,res)=> {

    res.send("server is ready");

});

app.get("/api/jokes", (req,res)=> {
    const jokes = [
        {
            id:1,
            title: "A joke",
            content: "This is a joke",
        },
        {
            id:2,
            title: "Another joke",
            content: "This is a second joke",
        },
        {
            id:3,
            title: "third joke",
            content: "This is a third joke",
        },
        {
            id:4,
            title: "fourth joke",
            content: "This is a fourth joke",
        },
        {
            id:5,
            title: "fifth joke",
            content: "This is a fifth joke",
        },

    ]

    res.send(jokes);
});

app.listen(3000, ()=> {
    console.log("Server is running on", 3000);
});

