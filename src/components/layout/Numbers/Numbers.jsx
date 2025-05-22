import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Numbers.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const Numbers = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    const numbersData = [
        {
            id: 1,
            title: t('numbers.cards.0.title'),
            value: '20+',
            icon: '/img/numbers-icon-1.svg'
        },
        {
            id: 2,
            title: t('numbers.cards.1.title'),
            value: '10+',
            icon: '/img/numbers-icon-2.svg'
        },
        {
            id: 3,
            title: t('numbers.cards.2.title'),
            value: '50+',
            icon: '/img/numbers-icon-3.svg'
        },
        {
            id: 4,
            title: t('numbers.cards.3.title'),
            value: '1000+',
            icon: '/img/numbers-icon-4.svg'
        }
    ]

    return (
        <section className={s.numbers}>
            {isClient && <Container>
                <div className={s.wrapper}>
                    <Pretitle>{t('numbers.pretitle')}</Pretitle>
                    <SectionTitle white>{t('numbers.title')}</SectionTitle>

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
            </Container>}
        </section>
    )
}

export default Numbers
