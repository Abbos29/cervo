import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
import { axiosInstance } from "@/utils/axios";
import { useIsClient } from "usehooks-ts";

export const getServerSideProps = async () => {
  const { data: tires } = await axiosInstance.get(`/services`)
  return { props: { tires } }
}

export default function TiresPage({ tires }) {
  const isClient = useIsClient()
  return (
    <>
      {isClient && <>
        <HeadSeo title={tires[1]?.name_en} />
        <ServicesWrap type="tires" data={tires} />
      </>}
    </>
  )
}
