import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CountUp from 'react-countup'
import { useIsClient } from 'usehooks-ts'
import s from './Numbers.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'

const Numbers = ({ numbers }) => {
    console.log(numbers);

    const { t } = useTranslation()
    const isClient = useIsClient()
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    console.log('Intersection ratio:', entry.intersectionRatio)
                    if (entry.isIntersecting && !hasAnimated) {
                        console.log('Starting animation!')
                        setHasAnimated(true)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '100px 0px -50px 0px'
            }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [hasAnimated])

    const numbersData = [
        {
            id: 1,
            title: t('numbers.cards.0.title'),
            value: 20,
            suffix: '+',
            icon: '/img/numbers-icon-1.svg'
        },
        {
            id: 2,
            title: t('numbers.cards.1.title'),
            value: 10,
            suffix: '+',
            icon: '/img/numbers-icon-2.svg'
        },
        {
            id: 3,
            title: t('numbers.cards.2.title'),
            value: 50,
            suffix: '+',
            icon: '/img/numbers-icon-3.svg'
        },
        {
            id: 4,
            title: t('numbers.cards.3.title'),
            value: 1000,
            suffix: '+',
            icon: '/img/numbers-icon-4.svg'
        }
    ]

    return (
        <section className={s.numbers} ref={ref}>
            {isClient && <Container>
                <div className={s.wrapper}>
                    <Pretitle>{t('numbers.pretitle')}</Pretitle>
                    <SectionTitle white>{t('numbers.title')}</SectionTitle>

                    <div className={s.cards}>
                        {numbersData.map((card, index) => (
                            <div className={s.card} key={card.id}>
                                <div>
                                    <h5>{card.title}</h5>
                                    <h4>
                                        {hasAnimated ? (
                                            <CountUp
                                                start={0}
                                                end={card.value}
                                                duration={2.5}
                                                delay={index * 0.2}
                                                separator=" "
                                                suffix={card.suffix}
                                                useEasing={true}
                                                easingFn={(t, b, c, d) => {
                                                    return c * (1 - Math.pow(2, -10 * t / d)) + b;
                                                }}
                                            />
                                        ) : (
                                            `0${card.suffix}`
                                        )}
                                    </h4>
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