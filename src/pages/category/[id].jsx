import CategoryWrap from '@/components/layout/CategoryWrap/CategoryWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'

const CategoryPage = ({ data }) => {
    return (
        <>
            <HeadSeo title={"Главная страница"} />
            <CategoryWrap data={data} />
        </>
    )
}

export async function getServerSideProps(context) {
    const categoryID = context.params.id;
    const { data } = await axiosInstance.get(`/products?category_id=${categoryID}`);
    return { props: { data } };
}

export default CategoryPage