import React from 'react'
import Link from 'next/link'
import s from './ServicesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'

const ServicesWrap = ({ data, type }) => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language || 'en'

    const findCurrentType = data?.find((el) => {
        return el?.name_en.toLowerCase() === type;
    })

    const getTranslatedTitle = (item) => {
        switch (lang) {
            case 'ru': return item?.title_ru
            case 'ar': return item?.title_ar
            default: return item?.title_en
        }
    }

    const getTranslatedType = (item) => {
        switch (lang) {
            case 'ru': return item?.name_ru
            case 'ar': return item?.name_ar
            default: return item?.name_en
        }
    }

    const getTranslatedDescription = (item) => {
        switch (lang) {
            case 'ru': return item?.description_ru
            case 'ar': return item?.description_ar
            default: return item?.description_en
        }
    }

    return (
        <>
            <section className={s.servicesWrap}>
                <Container>
                    <div className={s.top}>
                        <div className={s.top_wrap}>
                            <Breadcrumbs white />
                            <div className={s.top_category}>
                                {data.map(tab => (
                                    <Link
                                        key={tab?.id}
                                        href={`/services/${tab?.name_en.toLowerCase()}`}
                                        className={tab?.name_en.toLowerCase() === type ? s.activeTab : ''}
                                    >
                                        {lang === 'ru' ? tab?.name_ru : lang === 'ar' ? tab?.name_ar : tab?.name_en}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className={s.title}>
                            <h3>{t("nav.link3")}</h3>
                            <h2>
                                <span>{getTranslatedType(findCurrentType).toUpperCase()}</span>
                                <br />
                                {t("warranty")}
                            </h2>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>2025</h4>
                            <h3>{getTranslatedTitle(findCurrentType)}</h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: getTranslatedDescription(findCurrentType) }} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServicesWrap