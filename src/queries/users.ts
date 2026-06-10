import { User } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getUserByEmail(email: string): Promise<{ id: string } | null> {
    return await prisma.user.findUnique({
        where: { email },
        select: { id: true }
    })
}

export async function getUserByUsername(username: string): Promise<{ id: string } | null> {
    return await prisma.user.findUnique({
        where: { username },
        select: { id: true }
    })
}

export async function createUser(username: string, email: string, password: string): Promise<User> {
    return await prisma.user.create({
        data: {
            username,
            email,
            password
        }
    })
}