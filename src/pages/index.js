import Benefits from '@/components/layout/Benefits/Benefits'
import ContactsWrap from '@/components/layout/ContactsWrap/ContactsWrap'
import Hero from '@/components/layout/Hero/Hero'
import Numbers from '@/components/layout/Numbers/Numbers'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const Home = () => {
  const { t } = useTranslation()
  const isClient = useIsClient()
  return (
    <>
      {isClient && <>
        <HeadSeo title={t("pages.main")} />
        <Hero />
        <Numbers />
        <Benefits />
        <ContactsWrap />
      </>
      }
    </>
  )
}

export default Home