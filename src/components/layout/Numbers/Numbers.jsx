import React from 'react'
import s from './Numbers.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'

const Numbers = () => {
    const numbersData = [
        {
            id: 1,
            title: 'Products',
            value: '20+',
            icon: '/img/numbers-icon-1.svg'
        },
        {
            id: 2,
            title: 'Years on the market',
            value: '10+',
            icon: '/img/numbers-icon-2.svg'
        },
        {
            id: 3,
            title: 'Global distributors',
            value: '50+',
            icon: '/img/numbers-icon-3.svg'
        },
        {
            id: 4,
            title: 'Satisfied clients',
            value: '1000+',
            icon: '/img/numbers-icon-4.svg'
        }
    ];

    return (
        <>
            <section className={s.numbers}>
                <Container>
                    <div className={s.wrapper}>
                        <Pretitle>Numbers</Pretitle>
                        <SectionTitle white>We believe in numbers</SectionTitle>

                        <div className={s.cards}>
                            {numbersData.map(card => (
                                <div className={s.card} key={card.id}>
                                    <div>
                                        <h5>{card.title}</h5>
                                        <h4>{card.value}</h4>
                                    </div>
                                    <img src={card.icon} alt={`${card.title} icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Numbers