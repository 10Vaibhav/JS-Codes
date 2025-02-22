const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {

    try{

        const connection = await mongoose.connect(process.env.MONGODB_URL)

    }catch (error){
        console.log(error.message);
    }
}

module.exports = connectDB;