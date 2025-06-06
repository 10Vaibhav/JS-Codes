import { PrismaClient } from "@/app/generated/prisma"

const prismaClientSingleton = () => {
    return new PrismaClient();
}

declare global {
    let prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

//@ts-ignore
const prisma = globalThis.prisma ?? prismaClientSingleton()

// @ts-ignore
if(process.env.NODE_ENV !== 'production') globalThis.prisma = prisma


export default prisma;
