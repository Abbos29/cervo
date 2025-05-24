import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'

const ProductPage = ({ data }) => {
    return (
        <>
            <HeadSeo title={`${data?.name}`} description={`${data?.description}`} />
            <ProductWrap data={data} />
        </>
    )
}

export async function getServerSideProps(context) {
    const productID = context.params.id;
    const { data } = await axiosInstance.get(`/products/${productID}/`);
    return { props: { data } };
}

export default ProductPage