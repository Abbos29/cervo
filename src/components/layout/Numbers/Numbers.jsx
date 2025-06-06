import React, { useEffect, useRef, useState } from 'react'
import CountUp from 'react-countup'
import { useIsClient } from 'usehooks-ts'
import s from './Numbers.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useTranslation } from 'react-i18next'

const Numbers = ({ numbers, general }) => {
    const isClient = useIsClient()
    const [hasAnimated, setHasAnimated] = useState(false)
    const ref = useRef(null)
    const { i18n } = useTranslation()

    const getLocalizedText = (item, key) => {
        const lang = i18n.language
        return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || ''
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: '100px 0px -50px 0px'
            }
        )

        if (ref.current) observer.observe(ref.current)

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [hasAnimated])

    return (
        <section className={s.numbers} ref={ref}>
            {isClient && (
                <Container>
                    <div className={s.wrapper}>
                        <Pretitle>{getLocalizedText(general?.number, 'word')}</Pretitle>
                        <SectionTitle white>{getLocalizedText(general?.number, 'title')}</SectionTitle>

                        <div className={s.cards}>
                            {numbers?.map((card, index) => (
                                <div className={s.card} key={card?.id}>
                                    <div>
                                        <h5>{getLocalizedText(card, 'name')}</h5>
                                        <h4>
                                            {hasAnimated ? (
                                                <CountUp
                                                    start={0}
                                                    end={card?.value}
                                                    duration={2.5}
                                                    delay={index * 0.2}
                                                    separator=" "
                                                    suffix={'+'}
                                                    useEasing={true}
                                                    easingFn={(t, b, c, d) =>
                                                        c * (1 - Math.pow(2, -10 * t / d)) + b
                                                    }
                                                />
                                            ) : (
                                                `0+`
                                            )}
                                        </h4>
                                    </div>
                                    <img src={card?.icon} alt={`${getLocalizedText(card, 'name')} icon`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            )}
        </section>
    )
}

export default Numbers