"use server"

import { EmailTakenError, UsernameTakenError } from "@/errors"
import { createUser, getUserByEmail, getUserByUsername } from "@/queries/users"
import argon2 from "argon2"

type SignupResult = { success: true } | { success: false; emailError?: string; userError?: string }

export async function signup(username: string, email: string, password: string): Promise<SignupResult> {
    try {
        const emailExists = await getUserByEmail(email)
        if (emailExists) {
            throw new EmailTakenError("Email already in use")
        }

        const usernameExists = await getUserByUsername(username)
        if (usernameExists) {
            throw new UsernameTakenError("Username already in use")
        }

        const hashedPassword = await argon2.hash(password)
        await createUser(username, email, hashedPassword)

        return { success: true }
    } catch (err) {
        if (err instanceof EmailTakenError) {
            return { success: false, emailError: "Email already in use" }
        }
        if (err instanceof UsernameTakenError) {
            return { success: false, userError: "Username already in use" }
        }
        throw new Error(`Unexpected error: ${err}`)
    }
}