import CategoryWrap from '@/components/layout/CategoryWrap/CategoryWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import { useRouter } from 'next/router'
import React from 'react'

const CategoryPage = ({ data }) => {
    const router = useRouter()
    const categoryProducts = data?.filter((el) => {
        return el?.category == router.query.id;
    })

    return (
        <>
            <HeadSeo title={"Главная страница"} description={"Описание"} />
            <CategoryWrap categoryProducts={categoryProducts} />
        </>
    )
}

export async function getServerSideProps(context) {
    // const categoryID = context.params.id;
    const { data } = await axiosInstance.get(`/products/`);
    return { props: { data } };
}

export default CategoryPage