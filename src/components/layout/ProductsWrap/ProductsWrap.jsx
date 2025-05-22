import React from 'react'
import s from './ProductsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'

const ProductsWrap = () => {
    return (
        <>
            <section className={s.productsWrap}>
                <Container>
                    <Breadcrumbs />

                    <div className={s.wrapper}>
                        <div className={s.card}>
                            <img src="" alt="" />
                            <h3>Batteries</h3>
                            <p>Grip the road with confidence.Our tires are engineered for superior performance, safety, and long-lasting durability on every journey</p>
                        </div>
                        <div className={s.card}>
                            <img src="" alt="" />
                            <h3>Batteries</h3>
                            <p>Grip the road with confidence.Our tires are engineered for superior performance, safety, and long-lasting durability on every journey</p>
                        </div>
                        <div className={s.card}>
                            <img src="" alt="" />
                            <h3>Batteries</h3>
                            <p>Grip the road with confidence.Our tires are engineered for superior performance, safety, and long-lasting durability on every journey</p>
                        </div>
                    </div>

                    <div className={s.inner}>
                        <h2>Battery, Tire & Wheel Solutions Delivering the Quality and Style Your Vihecle Deserves</h2>
                        <p>From premium tires to custom wheels and reliable batteries, we’re here to elevate your driving experience anytime, anywhere.</p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProductsWrap