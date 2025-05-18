import React from 'react'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'

const benefitsData = [
    {
        icon: '/img/benefits-icon-1.svg',
        title: 'Wide Range of Products',
        text: 'A variety of car rims, tires and batteries for all types of vehicles',
    },
    {
        icon: '/img/benefits-icon-2.svg',
        title: 'Guaranteed Quality',
        text: 'Certified products from trusted manufacturers',
    },
    {
        icon: '/img/benefits-icon-3.svg',
        title: 'International Delivery',
        text: 'Fast and reliable shipping to partners worldwide',
    },
    {
        icon: '/img/benefits-icon-4.svg',
        title: 'Personal Manager for Clients',
        text: 'Individual approach and prompt solutions to any tasks',
    },
    {
        icon: '/img/benefits-icon-5.svg',
        title: '24/7 Customer Support',
        text: 'Professional assistance anytime, anywhere',
    },
    {
        icon: '/img/benefits-icon-6.svg',
        title: 'Profitable Wholesale Purchases',
        text: 'Exclusive discounts and offers for wholesale clients',
    },
]

const Benefits = () => {
    return (
        <section className={s.benefits}>
            <Container>
                <div className={s.top}>
                    <Pretitle>Benefits</Pretitle>
                    <SectionTitle white>Advantages of the Company</SectionTitle>
                    <p>
                        We manufacture car batteries, wheels, and tires and are looking for distributors.
                        Flexible terms, reliable delivery, and support.
                    </p>
                </div>
                <div className={s.wrapper}>
                    {benefitsData.map((benefit, index) => (
                        <div className={s.card} key={index}>
                            <img src={benefit.icon} alt="icon" />
                            <h3>{benefit.title}</h3>
                            <p>{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Benefits
