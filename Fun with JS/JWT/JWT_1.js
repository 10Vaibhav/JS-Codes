const jwt = require("jsonwebtoken")


// decode, verify, sign

const value = {
    name: "vaibhav",
    accountNumber: 123123123
}

// sign and not generate
const token = jwt.sign(value, "secret");
console.log(token);

// this token has been generated using this secret, and hence this token can only be verified using this secret

// this is your checkBook.
//token :
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmFpYmhhdiIsImFjY291bnROdW1iZXIiOjEyMzEyMzEyMywiaWF0IjoxNzM2MDYzNDYzfQ.KGr_RHFwjebf26o6xMRQSo5anNdRYH4f-2RCCPDTxIA

// verify the token .
const verifiedToken = jwt.verify(token, "secret");

console.log(verifiedToken);

