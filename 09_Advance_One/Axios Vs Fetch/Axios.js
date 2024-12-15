const axios = require("axios");

// we are seeing how the axios is work when we send data or get data .
// when we sending the "post","put","delete" request In Axios then first parameter is url, Second Parameter takes body and third Parameter may take headers
// when we sending the "get" request we can not send the body so,the first parameter is url, the second parameter is header or something else that you want to send along with get request.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Syntax : 1

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function Axios_method() {
//   const response = await axios.post(
//     " https://httpdump.app/dumps/0005d7f8-2a51-49ab-95c8-0a71d0b374eb?a=b",
//     {
//       username: "vaibhav",
//       password: "123",
//     },
//     {
//       headers: {
//         Authorization: "Bearer 123",
//       },
//     }
//   );

// //   console.log(`$Fetching Data through Axios : ${response.data}`);
// }
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Syntax : 2

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function Axios_method(){
  const response = await axios(
    {
      url : "https://httpdump.app/dumps/0005d7f8-2a51-49ab-95c8-0a71d0b374eb?a=b",
      method: "PUT",
      headers: {
        Authorization : "Bearer 123",
      },
      data : {
        username : "vaibhav"
      }
    },
  );
  console.log(response.data)
}
Axios_method();


// https://www.postb.in/1734069938827-2026243228465