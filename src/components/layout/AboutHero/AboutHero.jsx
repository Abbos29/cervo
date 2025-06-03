import React from 'react'
import s from './AboutHero.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'

const AboutHero = () => {
    return (
        <>
            <section className={s.contacts_hero}>
                <Container>
                    <div className={s.cotacts_title}>
                        <Breadcrumbs white />
                        <button className={s.btn}>About us</button>
                    </div>
                    <div className={s.title}>
                        <h1><span>ABOUT</span></h1>
                        <h2><span>CERVO</span> GLOBAL</h2>
                        <p>The Professional Choice for Your Fleet</p>
                    </div>
                </Container>
            </section>
            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>2025</h4>
                            <h3>Short Description about Cervo:</h3>
                        </div>
                        <p><span>Cervo</span> is a brand with over 22 years of experience in the automotive industry. In 2023, we launched the Cervo trademark to unify our expertise under one name and offer customers a trusted source for high-quality wheels, tires, and batteries. In 2024, our brand and logo were officially patented internationally, confirming our commitment to quality and global standards.
                        </p>
                        <p>In 2025, we went online to make our products more accessible — and now, Cervo is actively seeking international partners for collaboration and global distribution of our products, including car batteries, wheels, and tires. Our goal is to enter new markets and build long-term partnerships around the world.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutHero