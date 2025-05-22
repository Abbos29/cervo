import React from 'react'
import s from './CategoryWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Card from '@/components/ui/Card/Card'

const CategoryWrap = ({ categoryProducts }) => {
    const isClient = useIsClient()
    const { t } = useTranslation()

    return (
        <>
            {isClient && <section>
                <Container>
                    <div className={s.title_wrap}>
                        <Breadcrumbs />
                        <span>
                            <button className={s.active}>Aluminum</button>
                            <button className={s.btn}>Forged</button>
                        </span>
                    </div>

                    {categoryProducts?.length ? (
                        <div className={s.products_wrapper}>
                            {categoryProducts?.map((el) => {
                                return (
                                    <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
                                )
                            })}
                        </div>
                    ) : (
                        <div className={s.empty_wrap}>
                            <h2>Not found...</h2>
                        </div>
                    )}

                </Container>
            </section>}
        </>
    )
}

export default CategoryWrap