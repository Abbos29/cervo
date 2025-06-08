import React from 'react'
import s from './AboutHero.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'

const AboutHero = ({ general }) => {
    const { t, i18n } = useTranslation()

    const getLocalizedText = (obj, key) => {
        const lang = i18n.language
        return obj?.[`${key}_${lang}`] || obj?.[`${key}_en`] || ''
    }

    return (
        <>
            <section className={s.contacts_hero}>
                <Container>
                    <div className={s.cotacts_title}>
                        <Breadcrumbs white />
                        <button className={s.btn}>{t("nav.link4")}</button>
                    </div>
                    <div className={s.title}>
                        <h1><span>ABOUT</span></h1>
                        <h2><span>CERVO</span> GLOBAL</h2>
                        <p>{getLocalizedText(general?.about, 'slogan')}</p>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>2025</h4>
                            <h3>{getLocalizedText(general?.about, 'short_description')}</h3>
                        </div>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: getLocalizedText(general?.about, 'description')
                            }}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutHero
