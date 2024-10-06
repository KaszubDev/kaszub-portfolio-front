'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLinks = () => {
    const pathname = usePathname()
    
    return (
    <>
        <Link href="/" className={`text-base text-right border-none pr-2 md:hover:text-foreground/80 ${pathname == "/projects" ? "font-bold" : ""}`}>
            Projects
        </Link>
        <Link href="/about" className={`text-base text-right border-none pr-2 md:hover:text-foreground/80 ${pathname == "/about" ? "font-bold" : ""}`}>
            About me
        </Link>
        <Link href="/articles" className={`text-base text-right border-none pr-2 md:hover:text-foreground/80 ${pathname == "/articles" ? "font-bold" : ""}`}>
            Articles
        </Link>
    </>
    )
}

export default NavLinks