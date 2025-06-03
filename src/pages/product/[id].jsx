import OtherWheels from '@/components/layout/OtherWheels/OtherWheels'
import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'

const ProductPage = ({ data, wheels }) => {
    const isOurWheels = false;
    return (
        <>
            <HeadSeo title={`${data?.name}`} description={`${data?.description}`} />
            <ProductWrap data={data} />
            {isOurWheels && <OtherWheels wheels={wheels} />}
        </>
    )
}

export async function getServerSideProps(context) {
    const productID = context.params.id;
    const { data } = await axiosInstance.get(`/products/${productID}/`);
    const { data: wheels } = await axiosInstance.get(`/products/?category_id=3`)
    return { props: { data, wheels } };
}

export default ProductPage