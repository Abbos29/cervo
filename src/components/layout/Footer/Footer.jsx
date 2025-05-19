import React from 'react'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <Container>
                    <div className={s.wrapper}>
                        <Link className={s.logo} href={`/`}><img src="/img/logo.png" alt="logo" /></Link>

                        <div className={s.menu}>
                            <Link href={`/`}>Dashboard</Link>
                            <Link href={`/`}>Products</Link>
                            <Link href={`/`}>Services</Link>
                            <Link href={`/`}>About us</Link>
                            <Link href={`/`}>Contacts</Link>
                        </div>
                    </div>

                    <div className={s.rights}>
                        <p>© 2025 Cervo Global. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer