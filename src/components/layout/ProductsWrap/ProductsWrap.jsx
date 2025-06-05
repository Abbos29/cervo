import React from 'react'
import s from './ProductsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import NotFound from '@/components/ui/NotFound/NotFound'

const stripHtml = (html) => {
    if (typeof window === 'undefined') return html;
    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
}

const ProductsWrap = ({ data }) => {
    const isClient = useIsClient()
    const { t, i18n } = useTranslation()

    const getLocalizedField = (el, field) => {
        const lang = i18n.language
        return el[`${field}_${lang}`] || el[`${field}_en`] // fallback to English
    }

    return (
        <>
            {isClient && (
                <section className={s.productsWrap}>
                    <Container>
                        <Breadcrumbs />

                        {data && data.length ? (
                            <div className={s.wrapper}>
                                {data.map((el) => {
                                    let href = '#'

                                    if (el.name_en === 'Wheels') {
                                        href = `/category/${el.id}?category_name=${encodeURIComponent(el.name_en)}`
                                    } else if (el.name_en === 'Tires') {
                                        href = '/product/1'
                                    } else if (el.name_en === 'Batteries') {
                                        href = '/batteries'
                                    }
                                    const name = getLocalizedField(el, 'name')
                                    const desc = stripHtml(getLocalizedField(el, 'description'))
                                    return (
                                        <Link key={el.id} href={href} className={s.card}>
                                            {el.icon && <img src={el.icon} alt={name} />}
                                            <h3>{name}</h3>
                                            {desc && <p>{desc}</p>}
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <NotFound />
                        )}

                        <div className={s.inner}>
                            <h2>{t('products.title')}</h2>
                            <p>{t('products.description')}</p>
                        </div>
                    </Container>
                </section>
            )}
        </>
    )
}

export default ProductsWrap