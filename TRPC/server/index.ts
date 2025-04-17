import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
    title: z.string(),
    description: z.string(),
    done: z.boolean().optional()
})

const appRouter = router({
    // createTodo: publicProcedure
    //     .input(todoInputType)
    //     .mutation(async (opts) => {
    //         const title = opts.input.title;
    //         const description = opts.input.description;

    //         // Do db stuff here

    //         return {
    //             id: "1",
    //         }
    //     }),
    signUp: publicProcedure
            .input(z.object({
                email: z.string(),
                password: z.string(),
            }))
            .mutation(async (opts) => {
                let email = opts.input.email;
                let password = opts.input.password;

                // Do Validation here
                // Do database stuff here

                let token = "123";
                return {
                    token
                }
            })
});

const server = createHTTPServer({
    router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;


