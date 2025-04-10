import { PrismaClient } from '../src/generated/prisma'
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/users", async (req, res)=> {
    const users = await client.user.findMany();

    res.json({
        users
    });
});

app.get("/todos/:id", async(req, res)=> {
    const id = Number(req.params.id as unknown as string);

    const user = await client.user.findFirst({
        where: {
            id: id
        },
        include:{
            todos: true
        }
    });

    res.json({
        user
    })
})


async function createUser(username: string, password: string, age: number, city: string) {
    await client.user.create({
        data: {
            username,
            password,
            age,
            city
        }
    })
}

async function deleteUser(id: number) {
    await client.user.delete({
        where: {
            id
        }
    })
}

async function updateUser() {
    await client.user.update({
        where: {
            id: 4
        },
        data: {
            username: "Vaibhav10"
        }
    })
}


async function getUser() {
    const user = await client.user.findFirst({
        where: {
            id: 4
        },
        include: {
            todos: true
        }
    });

    console.log(user);
}


// Insert Data
// createUser("Mahajan", "123456", 21, "Katol");

// Read Data
// getUser();

// Update Data
// updateUser();

// Delete Data
// deleteUser(3);

app.listen(3000, ()=> {
    console.log("server starts...")
})