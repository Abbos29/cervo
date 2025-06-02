import AboutHero from '@/components/layout/AboutHero/AboutHero'
import ContactsWrap from '@/components/layout/ContactsWrap/ContactsWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const Contacts = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    return (
        <>
            {isClient && <>
                <HeadSeo title={t("nav.link5")} />
                <AboutHero isMap={true} />
                <ContactsWrap />
            </>}
        </>
    )
}

export default Contacts