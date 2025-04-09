import { Client } from "pg";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const pgClient = new Client({
    user: process.env.user,
    password: process.env.password,
    port: 5432,
    host: process.env.host,
    database: process.env.database,
    ssl: true
});

async function main() {
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    console.log(response.rows);
}

app.post("/signup", async (req,res)=> {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;

    try{

    // applying transaction
    await pgClient.query("BEGIN;");
    const response =  await pgClient.query(`Insert into users (username,email,password) Values ($1, $2, $3) RETURNING id`, [username, email, password]);

    // await new Promise(x => setTimeout(x, 100 * 1000)); // stop the control on this line for 100s.

    await pgClient.query(`Insert into addresses (user_id, city, country, street, pincode) Values ($1, $2, $3, $4, $5);`,[response.rows[0].id, city, country, street, pincode]);
    await pgClient.query("COMMIT;");

    res.json({
        message: "You have signed up!!"
    });

    }catch(e){
        res.json({
            message: "Error While Signed UP" + e
        });
    }
});

app.get("/metadata", async(req, res) =>{

    const id = req.query.id;

    const response1 = await pgClient.query(`SELECT username,email,id FROM users WHERE id=$1`, [id]);

    const response2 = await pgClient.query(`SELECT * FROM addresses WHERE user_id=$1`,[id]);

    res.json({
        user: response1.rows[0],
        address: response2.rows
    })
});

app.get("/better-metadata", async(req, res)=> {

    const id = req.query.id;

    const query = await pgClient.query(`SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1; `, [id]);

    res.json({
        result: query.rows
    })
})

app.listen(3000, async ()=> {
    await main();
    console.log("Server is running on port 3000");
});

