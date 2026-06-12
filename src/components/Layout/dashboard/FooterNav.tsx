import CustomLink from "@/components/UI/CustomLink";
import { navLinks } from "@/lib/links";

export default function FooterNav() {
    return (
        <footer className="bg-card border-t border-subtle py-4 md:hidden">
            <nav className="flex justify-around items-center">
                {navLinks.map(link => {
                    const Icon = link.icon
                    return (
                        <CustomLink key={link.href} href={link.href} variant="mobile">
                            <Icon />
                            {link.label}
                        </CustomLink>
                    )
                })}
            </nav>
        </footer>
    )
}