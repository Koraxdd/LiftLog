export function isAuthPage(path: string): boolean {
    return path === "/" ||
           path.startsWith("/login") ||
           path.startsWith("/register")
}