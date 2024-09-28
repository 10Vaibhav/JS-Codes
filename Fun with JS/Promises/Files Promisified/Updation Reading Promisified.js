const fs = require("fs");


const getData = (data) =>{
    console.log(data);
}

function updateReadFile(){

    return new Promise((resolve,reject) =>{

        fs.appendFile("a.txt"," and I pursuing graduation in Data Science", (err) =>{
            if(err){
                reject(err);
            }else{
                fs.readFile("a.txt","utf-8",(e,content)=>{
                    if(e){
                        reject(err);
                    }else{
                        getData(content);
                        resolve()
                    }
                })
            }
        })
    })
}

function updated(){
    console.log("success");
}

updateReadFile()
.then(updated)
.catch((err)=>{
    console.log(err);
})


