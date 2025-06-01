import cluster from "cluster";
import os from "os";
import express from "express";

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    // fork workers -> Making worker equals as cpus
    for(let i=0; i<totalCPUs; i++){
        cluster.fork();
    }
}else{
    const app = express();
    const PORT = 3000;

    app.get("/", (req,res)=> {
        return res.json({message: `Hello from express server ${process.pid}`});
    });

    app.listen(PORT, ()=> console.log(`Server started at PORT: ${PORT}`));
}

