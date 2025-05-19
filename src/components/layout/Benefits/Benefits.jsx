import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const Benefits = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()

    const cards = t('benefits.cards', { returnObjects: true })

    const benefitsData = Array.isArray(cards)
        ? cards.map((card, index) => ({
            ...card,
            icon: `/img/benefits-icon-${index + 1}.svg`,
        }))
        : []

    return (
        <section className={s.benefits}>
            {isClient && <Container>
                <div className={s.top}>
                    <Pretitle>{t('benefits.pretitle')}</Pretitle>
                    <SectionTitle white>{t('benefits.title')}</SectionTitle>
                    <p>{t('benefits.description')}</p>
                </div>
                <div className={s.wrapper}>
                    {benefitsData.map((benefit, index) => (
                        <div className={s.card} key={index}>
                            <img src={benefit.icon} alt="icon" />
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </Container>}
        </section>
    )
}

export default Benefits
