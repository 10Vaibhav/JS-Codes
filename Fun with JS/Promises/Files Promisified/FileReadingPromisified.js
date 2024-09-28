const fs = require("fs");
function fileReadingPromisified(){

    let p = new Promise((resolve,reject)=>{

        fs.readFile("a.txt","utf-8",(err,data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
        });

    });

    return p;

}

const getData = (data) => {
    console.log(data);
}


fileReadingPromisified()
.then(getData)
.catch((err) => {
    console.log(err);
})