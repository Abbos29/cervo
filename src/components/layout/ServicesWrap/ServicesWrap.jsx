import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './ServicesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'

const tabs = [
    { label: 'Batteries', slug: 'batteries' },
    { label: 'Tires', slug: 'tires' },
    { label: 'Wheels', slug: 'wheels' }
]

const contentMap = {
    batteries: {
        year: 2025,
        title: 'One-Year Warranty for Formulaplus Car Batteries',
        content: 'This warranty document outlines the terms and conditions of the one-year warranty...'
    },
    tires: {
        year: 2025,
        title: 'Warranty for Cervo Tires',
        content: 'There are several types of warranties that come with the tires...'
    },
    wheels: {
        year: 2025,
        title: 'Warranty for Alloy Wheels',
        content: 'Cervo Wheels are backed by a robust manufacturer warranty...'
    }
}

const ServicesWrap = ({ type }) => {
    const router = useRouter()
    const data = contentMap[type] || {}

    return (
        <>
            <section className={s.servicesWrap}>
                <Container>
                    <div className={s.top}>
                        <div className={s.top_wrap}>
                            <Breadcrumbs />
                            <div className={s.top_category}>
                                {tabs.map(tab => (
                                    <Link
                                        key={tab.slug}
                                        href={`/services/${tab.slug}`}
                                        className={tab.slug === type ? s.activeTab : ''}
                                    >
                                        {tab.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <h2 className={s.title}>
                            <span>{type.toUpperCase()}</span> WARRANTY
                        </h2>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>{data.year}</h4>
                            <h3>{data.title}</h3>
                        </div>
                        <p>{data.content}</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServicesWrap
