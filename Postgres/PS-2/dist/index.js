"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client({
    user: process.env.user,
    password: process.env.password,
    port: 5432,
    host: process.env.host,
    database: process.env.database,
    ssl: true
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pgClient.connect();
        const response = yield pgClient.query("SELECT * FROM users;");
        console.log(response.rows);
    });
}
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const city = req.body.city;
    const country = req.body.country;
    const street = req.body.street;
    const pincode = req.body.pincode;
    try {
        // applying transaction
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(`Insert into users (username,email,password) Values ($1, $2, $3) RETURNING id`, [username, email, password]);
        // await new Promise(x => setTimeout(x, 100 * 1000)); // stop the control on this line for 100s.
        yield pgClient.query(`Insert into addresses (user_id, city, country, street, pincode) Values ($1, $2, $3, $4, $5);`, [response.rows[0].id, city, country, street, pincode]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "You have signed up!!"
        });
    }
    catch (e) {
        res.json({
            message: "Error While Signed UP" + e
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const response1 = yield pgClient.query(`SELECT username,email,id FROM users WHERE id=$1`, [id]);
    const response2 = yield pgClient.query(`SELECT * FROM addresses WHERE user_id=$1`, [id]);
    res.json({
        user: response1.rows[0],
        address: response2.rows
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = yield pgClient.query(`SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id=$1; `, [id]);
    res.json({
        result: query.rows
    });
}));
app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
    console.log("Server is running on port 3000");
}));
