import { type NextRequest, NextResponse } from "next/server"
import { isAuthPage } from "./utils/isAuthPage"
import { getToken } from "next-auth/jwt"

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
    const isAuth = isAuthPage(req.nextUrl.pathname)

    if (isAuth && token) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    if (!isAuth && !token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register", "/"]
}