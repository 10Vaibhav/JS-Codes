import mongoose from "mongoose";

export async function Connect() {

    try {
        await mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        connection.on('connected', ()=> {
            console.log("MongoDB Connected successfully");
        });

        connection.on("error", (err)=> {
            console.log("MongoDB connection error. Please make sure MongoDB is running. "+ err);
            process.exit();
        })

    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}
