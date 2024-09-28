const fs = require("fs");

function writingPromisified(){

    return new Promise((resolve,reject)=>{

        fs.writeFile("a.txt","Hello I am vaibhav",(err)=>{
            if(err){
                reject(err);
            }else{
                resolve();
            }
        })
    })
}

function doneWriting(){
    console.log("writing work is done");
}

writingPromisified()
.then(doneWriting)
.catch((err)=>{
    console.log(err);
})

console.log("done");