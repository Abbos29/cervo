import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const Benefits = ({ benefits, general }) => {
    const { t, i18n } = useTranslation()
    const isClient = useIsClient()

    const getLocalizedText = (item, key) => {
        const lang = i18n.language
        return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || ''
    }

    return (
        <section className={s.benefits}>
            {isClient && (
                <Container>
                    <div className={s.top}>
                        <Pretitle>{t('benefits.pretitle')}</Pretitle>
                        <SectionTitle white>{getLocalizedText(general?.benefit, 'title')}</SectionTitle>
                        <p dangerouslySetInnerHTML={{ __html: getLocalizedText(general?.benefit, 'description') }} />
                    </div>

                    <div className={s.wrapper}>
                        {benefits?.map((benefit) => (
                            <div className={s.card} key={benefit?.id}>
                                <img src={benefit?.icon} alt="icon" />
                                <h3>{getLocalizedText(benefit, 'title')}</h3>
                                <p dangerouslySetInnerHTML={{ __html: getLocalizedText(benefit, 'description') }} />
                            </div>
                        ))}
                    </div>
                </Container>
            )}
        </section>
    )
}

export default Benefits