import React from 'react'
import s from './ProductsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import NotFound from '@/components/ui/NotFound/NotFound'

const ProductsWrap = ({ data }) => {
    const isClient = useIsClient()
    const { t } = useTranslation()
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

                                    if (el.name === 'Wheels') {
                                        href = `/category/${el.id}?category_name=${encodeURIComponent(el.name)}`
                                    } else if (el.name === 'Tires') {
                                        href = '/product/1'
                                    } else if (el.name === 'Batteries') {
                                        href = '/batteries'
                                    }

                                    return (
                                        <Link key={el.id} href={href} className={s.card}>
                                            {el.icon && <img src={el.icon} alt={el.name} />}
                                            <h3>{el.name}</h3>
                                            {el.description && <p>{el.description}</p>}
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