import React from 'react'
import s from './Hero.module.scss'
import Container from '@/components/ui/Container/Container'

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <Container>
                    <div className={s.poster}>
                        <img src="/img/logo.png" alt="poster" />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Hero