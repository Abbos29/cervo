import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './ContactsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const ContactsWrap = ({ socials, general }) => {
    const { t, i18n } = useTranslation()
    const isClient = useIsClient()

    const getLocalizedText = (item, key) => {
        const lang = i18n.language
        return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || ''
    }

    const social = socials?.[0]

    return (
        <section className={s.contactsWrap}>
            {isClient && (
                <Container>
                    <div className={s.top}>
                        <Pretitle>{t('contactsWrap.pretitle')}</Pretitle>
                        <SectionTitle>{getLocalizedText(general?.contact, 'title')}</SectionTitle>
                        <p dangerouslySetInnerHTML={{ __html: getLocalizedText(general?.contact, 'description') }} />
                    </div>

                    <div className={s.wrap}>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-1.svg" alt="icon" />
                            <h3>{t('contactsWrap.email')}</h3>
                            <a target="_blank" href={`mailto:${social?.email}`}>{social?.email}</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-2.svg" alt="icon" />
                            <h3>{t('contactsWrap.phone')}</h3>
                            <a target="_blank" href={`tel:${social?.phone}`}>{social?.phone}</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-3.svg" alt="icon" />
                            <h3>{t('contactsWrap.socials')}</h3>
                            <div className={s.socs}>
                                {social?.facebook && (
                                    <a target="_blank" href={social.facebook}><img src="/img/social-icon-fb.svg" alt="Facebook" /></a>
                                )}
                                {social?.twitter && (
                                    <a target="_blank" href={social.twitter}><img src="/img/social-icon-tw.svg" alt="Twitter" /></a>
                                )}
                                {social?.instagram && (
                                    <a target="_blank" href={social.instagram}><img src="/img/social-icon-inst.svg" alt="Instagram" /></a>
                                )}
                                {social?.linkedin && (
                                    <a target="_blank" href={social.linkedin}><img src="/img/social-icon-in.svg" alt="LinkedIn" /></a>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </section>
    )
}

export default ContactsWrap