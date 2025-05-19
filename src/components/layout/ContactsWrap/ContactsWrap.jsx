import React from 'react'
import s from './ContactsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'

const ContactsWrap = () => {
    return (
        <>
            <section className={s.contactsWrap}>
                <Container>
                    <div className={s.top}>
                        <Pretitle>Contacts</Pretitle>
                        <SectionTitle>Let’s stay connected</SectionTitle>
                        <p>It's never been easier to get in touch with Transit Company Inc. Call us, use our live chat widget or email and we'll get back to you as soon as possible!</p>
                    </div>

                    <div className={s.wrap}>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-1.svg" alt="icon" />
                            <h3>Email</h3>
                            <a target='_blank' href="mailto:info@cervo.global">info@cervo.global</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-2.svg" alt="icon" />
                            <h3>Phone</h3>
                            <a target='_blank' href="tel:+998999999999">+998(99) 999-99-99</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-3.svg" alt="icon" />
                            <h3>Socials</h3>
                            <div className={s.socs}>
                                <a target='_blank' href="#"><img src="/img/social-icon-fb.svg" alt="icon" /></a>
                                <a target='_blank' href="#"><img src="/img/social-icon-tw.svg" alt="icon" /></a>
                                <a target='_blank' href="#"><img src="/img/social-icon-inst.svg" alt="icon" /></a>
                                <a target='_blank' href="#"><img src="/img/social-icon-in.svg" alt="icon" /></a>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ContactsWrap