import React, { useState } from 'react'
import { useRouter } from 'next/router'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import Dropdown from '@/components/ui/Dropdown/Dropdown'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const router = useRouter()
    const isMainPage = router.pathname === '/'
    
    const toggleMenu = () => {
        setIsActive(prev => !prev)
    }

    return (
        <>
            <header className={`${s.header} ${isMainPage ? s.mainpage : ''}`}>
                <Container>
                    <div className={s.wrapper}>
                        <Link className={s.logo} href={`/`}><img src="/img/logo.png" alt="logo" /></Link>

                        <nav className={`${s.nav} ${isActive ? s.active : ''}`}>
                            <Link href={`/`}>Dashboard</Link>
                            <Link href={`/`}>Products</Link>
                            <Link href={`/`}>Services</Link>
                            <Link href={`/`}>About us</Link>
                            <Link href={`/`}>Contacts</Link>
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
        </>
    )
}

export default Header