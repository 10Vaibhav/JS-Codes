// function main(){

//     fetch("https://www.postb.in/1734069938827-2026243228465")
//     .then(async (response) =>{
//         const data = await response.json();
//         console.log(data);
//     });
// }

// we are seeing how the fetch is work when we send data or get data .

async function Fetch_method() {

    const response = await fetch("https://www.postb.in/1734069938827-2026243228465",{
        method : "POST",
        body : {
            username : "vaibhav",
            password : "123",
        },
        headers : {
            "Authorization" : "Bearer 123"
        },
    });

    // the endpoint that we use is not return the json, it returns the text so , for that we use text.
    const data = await response.text();
    console.log(`$Fetching Data through Fetch : ${data}`);
}

Fetch_method()

