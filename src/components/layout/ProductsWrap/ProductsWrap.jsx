import React from 'react'
import s from './ProductsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

const ProductsWrap = ({ data }) => {
    const isClient = useIsClient()
    const { t } = useTranslation()
    return (
        <>
            {isClient && <section className={s.productsWrap}>
                <Container>
                    <Breadcrumbs />

                    <div className={s.wrapper}>
                        {data?.map((el) => (
                            <Link href={`/category/${el?.id}`} className={s.card} key={el?.id}>
                                <img src={el?.icon} alt={el?.name} />
                                <h3>{el?.name}</h3>
                                <p>{el?.description}</p>
                            </Link>
                        ))}
                    </div>

                    <div className={s.inner}>
                        <h2>{t("products.title")}</h2>
                        <p>{t("products.description")}</p>
                    </div>
                </Container>
            </section>}
        </>
    )
}

export default ProductsWrap