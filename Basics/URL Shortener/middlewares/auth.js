import { getUser } from "../service/auth.js";

export async function restrictToLoggedInUserOnly(req, res, next){

    const token = req.cookies.token;
    if(!token) return res.redirect("/login");

    const user = getUser(token);
    if(!user) return res.redirect("/login");

    req.user = user;
    next();
}

export async function checkAuth(req, res, next){
    const token = req.cookies.token;
    const user = getUser(token);

    req.user = user;
    next();
}
