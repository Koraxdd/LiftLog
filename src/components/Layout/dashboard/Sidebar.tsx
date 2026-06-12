import { Dumbbell, LogOut } from "lucide-react"
import CustomLink from "@/components/UI/CustomLink"
import LogoutButton from "@/components/UI/Button/LogoutButton"
import { navLinks } from "@/lib/links"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export default async function Sidebar() {
    const session = await getServerSession(authOptions)

    return (
        <div className="hidden md:flex flex-col bg-card border-r border-subtle w-1/7">
            <div className="flex items-center gap-2 border-b border-subtle p-6">
                <Dumbbell
                    size={40} 
                    className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-2 py-1 rounded-lg" 
                />
                <h1 className="font-semibold text-xl">LiftLog</h1>
            </div>
            <nav className="flex flex-col flex-1 gap-2 p-4">
                {navLinks.map(link => {
                    const Icon = link.icon
                    return (
                        <CustomLink key={link.href} href={link.href} variant="desktop">
                            <Icon />
                            {link.label}
                        </CustomLink>
                    )
                })}
            </nav>
            <div className="border-t border-subtle p-4 flex flex-col gap-2">
                <div className="bg-surface rounded-lg flex items-center gap-3 p-4">
                    <div className="bg-brand rounded-full w-10 h-10 flex justify-center items-center">
                        <h2>AB</h2>
                    </div>
                    <div className="">
                        <h2>{session?.user.name}</h2>
                        <p className="text-sm">{session?.user.email}</p>
                    </div>
                </div>
                <LogoutButton size="sm">
                    <LogOut size={20} />
                    Logout
                </LogoutButton>
            </div>
        </div>
    )
}