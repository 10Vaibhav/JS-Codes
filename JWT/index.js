const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());

/*
[
    {
        username: "vaibhav", password: "2322", token : "asdASd32a"
    }
]
*/
const users = [];


// Should Return a random long String (Token)
function generateToken(){

    let options = [
        "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9","10"
    ];

    let token = "";
    for(let i=0; i<32; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

app.post("/signup", function(req,res){

    const username = req.body.username;
    const password = req.body.password;

    if (users.find( u => u.username === username)){
        res.json({
            message : "You are already Singed Up!!"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are Signed Up !!"
    })

    console.log(users);
})

app.post("/signin", function (req,res){

    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password)

    if (user){
        // const token = generateToken();
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)// convert username over to a jwt.

        // JWT Generated token is a state less token we don't have to store it on a database.
        // user.token = token;

        res.json({
            token : token
        })
    }else{
        res.status(403).send({
            message: "Invalid Username or Password !!"
        })
    }

    console.log(users);

})

app.get("/me", function(req,res){

    const token = req.headers.token // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "vaibhav@gmail.com"}
    const username = decodedInformation.username;


    const user = users.find(u => u.username === username);

    if(user){
        res.json({
            username : user.username,
            password : user.password
        })
    }else{
        res.json({
            message: "token invalid"
        })
    }

})

app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000")
})