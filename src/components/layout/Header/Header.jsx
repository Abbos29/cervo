import React, { useState } from 'react'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'

const Header = () => {

    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }

    return (
        <>
            <header className={s.header}>
                <Container>
                    <div className={s.wrapper}>
                        <Link className={s.logo} href={`/`}><img src="/img/logo.png" alt="logo" /></Link>

                        <nav className={`${s.nav} ${isActive ? s.active : null}`}>
                            <Link href={`/`}>Dashboard</Link>
                            <Link href={`/`}>Products</Link>
                            <Link href={`/`}>Services</Link>
                            <Link href={`/`}>About us</Link>
                            <Link href={`/`}>Contacts</Link>
                        </nav>

                        <div className={s.lang}>
                            <img src="/img/flag-icon-us.svg" alt="flag-icon" />
                        </div>

                        <div className={s.apply_btn}>
                            <Button apply>Apply now</Button>

                        </div>

                        <div onClick={toggleMenu} className={`${s.burger} ${isActive ? s.active : null}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header