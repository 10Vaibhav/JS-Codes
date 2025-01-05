const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

// Information Signing the with the jwtPassword.
function signJWT(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);

  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }

  const signature = jwt.sign(
    {
      username
    },
    jwtPassword
  );

  return signature;
}

const resultToken = signJWT("vaibhav@gmail.com", "123123123");
console.log("JWT Signature : " + resultToken);

// Decoding the Token.
function decodeJWT(token) {
  const decoded = jwt.decode(token);

  if (decoded) {
    return true;
  } else {
    return false;
  }
}

// if decoded returns true else false.
console.log("isSuccessFullyDecoded : " +decodeJWT(resultToken));


// Verifying the resultToken.
function verifyJWT(token){

  try{

    jwt.verify(token, jwtPassword);
    return true;

  }catch (err){
    return false;

  }

}

// if verified returns true else false.
console.log("isVerifiedInfo : " + verifyJWT(resultToken));

