import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "vaibhav@gmail.com" },
                password: { label: "password", type: "password" }
            },

            async authorize(credentials){
                const username = credentials?.username;
                const password = credentials?.password;

                console.log(username , password);
                // db request to check if this username and password are correct
                const user = {
                    name: "vaibhav",
                    id: "1",
                    email: "vaibhav@gmail.com"
                }

                if(user){
                    return user;
                }else{
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export {handler as GET,  handler as POST }

// export const GET = handler;
// export const POST = handler;

