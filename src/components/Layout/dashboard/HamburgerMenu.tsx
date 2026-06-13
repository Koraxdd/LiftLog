import LogoutButton from "@/components/UI/Button/LogoutButton";
import CustomLink from "@/components/UI/CustomLink"
import { navLinks } from "@/lib/links";
import clsx from "clsx"
import { LogOut } from "lucide-react";

type HamburgerMenuProps = {
    isOpen: boolean
    onClose: () => void
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
    return (
        <div className={clsx(
            "absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-out flex flex-col bg-card border-b border-subtle p-4 gap-2 origin-top",
            isOpen ? "opacity-100 max-h-96 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        )}>
            {navLinks.map(link => {
                const Icon = link.icon
                return (
                    <CustomLink key={link.href} href={link.href} variant="desktop" onClick={onClose}>
                        <Icon size={20} />
                        {link.label}
                    </CustomLink>
                )
            })}
            <LogoutButton size="sm">
                <LogOut size={20} className="mr-1" />
                Logout
            </LogoutButton>
        </div>
    )
}