import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.jwt_secret
  );
}

export function getUser(token) {
  if (!token) return null;

  try {
    const decode = jwt.verify(token, process.env.jwt_secret);
    return decode;
  } catch (err) {
    console.log(err);
    return null;
  }
}

