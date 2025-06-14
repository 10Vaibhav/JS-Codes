
import { PrismaClient } from "@/app/generated/prisma";

const prismaClientSingleton = () => {
    return new PrismaClient();
}

type prismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {prisma: PrismaClient | undefined}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton(); // The ?? operator: Returns the left side if it's not null or undefined, Returns the right side if the left side is null or undefined

export default prisma;
