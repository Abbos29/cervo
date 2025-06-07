import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
import { axiosInstance } from "@/utils/axios";
import { useIsClient } from "usehooks-ts";

export const getServerSideProps = async () => {
    const { data: wheels } = await axiosInstance.get(`/services`)
    return { props: { wheels } }
}

export default function WheelsPage({ wheels }) {
    const isClient = useIsClient()
    return (
        <>
            {isClient && <>
                <HeadSeo title={wheels[2]?.name_en} />
                <ServicesWrap type="wheels" data={wheels} />
            </>}
        </>
    )
}
