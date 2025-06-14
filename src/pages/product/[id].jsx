import OtherWheels from '@/components/layout/OtherWheels/OtherWheels'
import ProductWrap from '@/components/layout/ProductWrap/ProductWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'
import { useTranslation } from 'react-i18next'

const ProductPage = ({ data, wheels }) => {
    const isOurWheels = false;
    const { i18n } = useTranslation();
    const currentLang = i18n.language;

    const getTranslated = (field) => {
        switch (currentLang) {
            case 'ru':
                return data?.[`${field}_ru`] || '';
            case 'ar':
                return data?.[`${field}_ar`] || '';
            default:
                return data?.[`${field}_en`] || '';
        }
    };


    return (
        <>
            <HeadSeo
                title={getTranslated('name')}
                image={data.images[0]}
            // description={getTranslated('description')}
            />
            <ProductWrap data={data} />
            {isOurWheels && <OtherWheels wheels={wheels} />}

        </>
    )
}

export async function getServerSideProps(context) {
    const productID = context.params.id;
    const { data } = await axiosInstance.get(`/products/${productID}/`);
    const { data: wheels } = await axiosInstance.get(`/products/?category_id=1`);
    return { props: { data, wheels } };
}

export default ProductPage;