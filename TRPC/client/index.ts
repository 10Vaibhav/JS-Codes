import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";


// Pass AppRouter as generic here. 👇 This lets the 'trpc' object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({

    links: [
        httpBatchLink({
            url: "http://localhost:3000",
            async headers(){
                return {
                    Authorization: "Bearer 123"
                }
            },
        }),
    ],
}); 

async function main(){

    let response = await trpc.createTodo.mutate({
        title: "vaibhav@gamil.com",
    });

    console.log("Response Token from client: " ,response);
}

main();
