"use server"

import { createUser, getUserByEmail } from "@/queries/users"
import argon2 from "argon2"

export async function signup(username: string, email: string, password: string) {
    try {
        const exists = await getUserByEmail(email)
        if (exists) {
            throw new Error("Email already in use")
        }

        const hashedPassword = await argon2.hash(password)
        await createUser(username, email, hashedPassword)
    } catch (err) {
        console.log(err)
    }
}