import { NextRequest, NextResponse } from "next/server";
import {auth, clerkClient} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

const ITEMS_PER_PAGE = 10;

async function isAdmin(userId: string) {
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    return user.publicMetadata.role === "admin";
}

export async function GET(req: NextRequest){

    const {userId} = await auth();

    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const {searchParams} = new URL(req.url);
    const email = searchParams.get("email");
    const page = parseInt(searchParams.get("page") || "1");

    try {
        let user;
        if(email){
            user = await prisma.user.findUnique({
                where: {email},
                include: {
                    todos: {
                        orderBy: {createdAt: "desc"},
                        take: ITEMS_PER_PAGE,
                        skip: (page -1) * ITEMS_PER_PAGE,
                    },
                },
            });
        }

        const totalItems = email ? await prisma.todo.count({where: {user: {email}}}) : 0;

        const totalPages = Math.ceil(totalItems/ ITEMS_PER_PAGE);

        return NextResponse.json({user, totalPages, currentPage: page});
    } catch (err) {
        console.error("Error While getting admin todos", err);
        return NextResponse.json(
            {error: "Internal Server Error"},
            {status: 500}
        );
    }
}

export async function PUT(req: NextRequest) {

    const {userId} = await auth();

    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    try {
        const {email, isSubscribed, todoId, todoCompleted, todoTitle} = await req.json();

        if(isSubscribed !== undefined){
            await prisma.user.update({
                where: {email},
                data: {
                    isSubscribed,
                    subscriptionEnds: isSubscribed ? new Date(Date.now() + 30 * 24 * 60 * 60 * 1000): null,
                },
            });
        }

        if(todoId){
            await prisma.todo.update({
                where: {id: todoId},
                data: {
                    completed: todoCompleted !== undefined ? todoCompleted : undefined,
                    title: todoTitle || undefined,
                },
            });
        }

        return NextResponse.json({message: "Update Successfully!"}, {status: 200});
    } catch (err) {
        console.error("Error while Updating Admin todo", err);
        return NextResponse.json(
            {error: "Error while updating admin todo"},
            {status: 500}
        );
    }
}

export async function DELETE(req: NextRequest) {

    const {userId} = await auth();

    if(!userId || !(await isAdmin(userId))){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    try {
        const { todoId } = await req.json();

        if(!todoId){
            return NextResponse.json(
                {error: "Todo ID is required for deleting todo"},
                {status: 400}
            );
        }

        await prisma.todo.delete({
            where: {id: todoId},
        });

        return NextResponse.json({message: "Todo deleted Successfully!"}, {status: 200});
    } catch (err) {
        console.error("Error while deleting Admin todo", err);
        return NextResponse.json(
            {error: "Error While Deleting Admin todo"},
            {status: 500}
        );
    }
}
