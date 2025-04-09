import { Client } from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(express.json());

const pgClient = new Client({
    user: process.env.user,
    password: process.env.password,
    port: 5432,
    host: process.env.host,
    database: process.env.database,
    ssl: true
})

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}

app.post("/signup", async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    try{
    const response =  await pgClient.query(`Insert into users (username,email,password) Values ($1, $2, $3)`, [username, email, password]);

    res.json({
        message: "You have signed up!!"
    })

    }catch(e){
        res.json({
            message: "Error While Signed UP"
        })
    }
})

app.listen(3000, async ()=> {
    await main();
    console.log("Server is running on port 3000");
})
