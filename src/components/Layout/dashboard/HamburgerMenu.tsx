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
            "absolute top-full left-0 right-0 overflow-hidden transition-all duration-600 ease-out bg-card border-b border-subtle gap-2",
            isOpen ? "max-h-96 pointer-events-auto" : "max-h-0 pointer-events-none"
        )}>
            <div className="flex flex-col gap-2 p-4">
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
        </div>
    )
}