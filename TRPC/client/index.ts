import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";


// Pass AppRouter as generic here. 👇 This lets the 'trpc' object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({

    links: [
        httpBatchLink({
            url: "http://localhost:3000",
        }),
    ],
});

async function main(){

    let response = await trpc.signUp.mutate({
        email: "vaibhav@gamil.com",
        password: "123123"
    });

    console.log(response);
}

main();
