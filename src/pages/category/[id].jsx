import CategoryWrap from '@/components/layout/CategoryWrap/CategoryWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const CategoryPage = ({ data }) => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    const router = useRouter()
    
    return (
        <>
<<<<<<< HEAD
            <HeadSeo title={"Главная страница"} />
            <CategoryWrap data={data} />
=======
            {isClient && <>
                <HeadSeo title={router.query.category_name} />
                <CategoryWrap data={data} category_name={router.query.category_name} />

            </>}
>>>>>>> a5e275fa0a26ce02c51a75bd64f4671ab0228a75
        </>
    )
}

export async function getServerSideProps(context) {
    const categoryID = context.params.id;
    const { data } = await axiosInstance.get(`/products?category_id=${categoryID}`);
    return { props: { data } };
}

export default CategoryPage