import React from 'react'
import s from './CategoryWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import Card from '@/components/ui/Card/Card'
import NotFound from '@/components/ui/NotFound/NotFound'

const CategoryWrap = ({ data, category_name, materials, selectedMaterialID, setSelectedMaterialID }) => {
    const isClient = useIsClient()

    return (
        <>
            {isClient && <section>
                <Container>
                    <div className={s.title_wrap}>
                        <Breadcrumbs lastTitle={category_name} />
                        <span>
                            {materials && materials?.map((material) => (
                                <button
                                    key={material?.id}
                                    className={`${s.btn} ${selectedMaterialID === material?.id ? s.active : ''
                                        }`}
                                    onClick={() => setSelectedMaterialID(material?.id)}
                                >
                                    {material?.name}
                                </button>
                            ))}
                        </span>
                    </div>
                    {data?.length ? (
                        <div className={s.products_wrapper}>
                            {data?.map((el) => {
                                return (
                                    <>
                                        <Card key={el?.id} id={el?.id} image={el?.image} name={el?.name} sizes={el?.sizes} />
                                    </>
                                )
                            })}
                        </div>
                    ) : (
                        <NotFound />
                    )}
                </Container>
            </section>}
        </>
    )
}

export default CategoryWrap


