import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'

const ProductPage = () => {
    return (
        <>
            <HeadSeo title={"Главная страница"} description={"Описание"} />
            <ProductWrap />
        </>
    )
}

export default ProductPage