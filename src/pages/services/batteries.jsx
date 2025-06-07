import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
import { axiosInstance } from "@/utils/axios";
import { useIsClient } from "usehooks-ts";

export const getServerSideProps = async () => {
    const { data: batteries } = await axiosInstance.get(`/services`)
    return { props: { batteries } }
}

export default function BatteriesPage({ batteries }) {
    const isClient = useIsClient()
    return (
        <>
            {isClient && <>
                <HeadSeo title={batteries[0]?.name_en} />
                <ServicesWrap type='batteries' data={batteries} />
            </>}
        </>
    )
}
