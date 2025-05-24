import React from 'react'
import s from './CategoryWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Card from '@/components/ui/Card/Card'

const CategoryWrap = ({ data }) => {
    const isClient = useIsClient()
    const { t } = useTranslation()

    return (
        <>
            {isClient && <section>
                {data?.length ? (
                    <Container>
                        <div className={s.title_wrap}>
                            <Breadcrumbs />
                            <span>
                                <button className={s.active}>Aluminum</button>
                                <button className={s.btn}>Forged</button>
                            </span>
                        </div>
                        <div className={s.products_wrapper}>
                            {data?.map((el) => {
                                return (
                                    <>
                                        <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
                                    </>
                                )
                            })}
                        </div>
                    </Container>
                ) : (
                    <div className={s.empty_wrap}>
                        <h2>{t("not_found")}</h2>
                    </div>
                )}
            </section>}
        </>
    )
}

export default CategoryWrap


