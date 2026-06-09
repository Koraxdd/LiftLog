import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import argon2 from "argon2"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: { email: credentials?.email }
                })
                if (!user) return null

                const validPassword = await argon2.verify(user.password, credentials?.password as string)
                if (!validPassword) return null

                return user
            },
        })
    ]
}