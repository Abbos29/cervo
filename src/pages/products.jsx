import ProductsWrap from '@/components/layout/ProductsWrap/ProductsWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'


export const getServerSideProps = async () => {
    const { data } = await axiosInstance.get(`/categories/`)
    return {
        props: { data }
    }
}

const ProductsPage = ({ data }) => {
    console.log(data);

    return (
        <>
            <HeadSeo title={"Главная страница"} description={"Описание"} />
            <ProductsWrap />

        </>
    )
}

export default ProductsPage