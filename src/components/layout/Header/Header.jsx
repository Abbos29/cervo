import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import Dropdown from '@/components/ui/Dropdown/Dropdown'

const navLinks = [
    { href: '/', label: 'Dashboard' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About us' },
    { href: '/contacts', label: 'Contacts' },
]

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const router = useRouter()
    const isMainPage = router.pathname === '/'

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isActive])

    const toggleMenu = () => setIsActive(prev => !prev)

    const handleLinkClick = () => setIsActive(false)

    const mainPageClass = isMainPage && !scrolled ? s.mainpage : ''

    return (
        <header className={`${s.header} ${mainPageClass} ${scrolled ? s.scrolled : ''}`}>
            <Container>
                <div className={s.wrapper}>
                    <Link className={s.logo} href="/">
                        <img src="/img/logo.png" alt="logo" />
                    </Link>

                    <nav className={`${s.nav} ${isActive ? s.active : ''}`}>
                        {navLinks.map(({ href, label }) => (
                            <Link key={href} href={href} onClick={handleLinkClick}>
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className={s.lang}>
                        <Dropdown
                            defaultSelected="us"
                            onChange={(langId) => console.log(`Выбран язык: ${langId}`)}
                        />
                    </div>

                    <div className={s.apply_btn}>
                        <Button apply>Apply now</Button>
                    </div>

                    <div onClick={toggleMenu} className={`${s.burger} ${isActive ? s.active : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
