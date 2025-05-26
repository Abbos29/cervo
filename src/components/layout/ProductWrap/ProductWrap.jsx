import React, { useState } from 'react'
import s from './ProductWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

const ProductWrap = ({ data }) => {
    const [active, setActive] = useState(0)

    const characteristics = [
        { name: 'Dry', rating: data?.dry },
        { name: 'Wet', rating: data?.wet },
        { name: 'Snow', rating: data?.snow },
        { name: 'Noise', rating: data?.noise },
        { name: 'Treadwear', rating: data?.tread_wear }
    ];

    const renderRatingFields = (rating) => {
        const maxFields = 5;
        const filledFields = Math.round(rating);

        return Array.from({ length: maxFields }, (_, index) => (
            <div
                key={index}
                className={`${s.table_field} ${index < filledFields ? s.filled : ''}`}
            />
        ));
    };

    return (
        <>
            <section className={s.productWrap}>
                <Container>
                    <Breadcrumbs lastTitle={data?.name} />
                    <div className={s.wrapper}>
                        <div className={s.gallery}>
                            <div className={s.gallery_images}>
                                {data?.images?.map((el, i) => (
                                    <img className={i === active ? s.active : ''} onClick={() => setActive(i)} src={el} alt={i} key={i} />
                                ))}
                            </div>

                            <img className={s.gallery_main_image} src={data?.images[active]} alt="image" />
                        </div>

                        <div className={s.content}>
                            <div className={s.top}>
                                <h1>{data?.name}</h1>
                                <h2>{data?.category}</h2>
                            </div>

                            <h3>{data?.sub_title}</h3>

                            <p>
                                {data?.description}
                            </p>

                            <div className={s.sizes}>
                                {data?.sizes?.map((size, i) => (
                                    <div key={i}>{size}</div>
                                ))}
                            </div>

                            <div className={s.table}>
                                {characteristics.map((characteristic, index) => (
                                    <div key={index} className={s.table_row}>
                                        <b>{characteristic.name}</b>

                                        <div className={s.table_fields}>
                                            {renderRatingFields(characteristic.rating)}
                                        </div>

                                        <b>{characteristic.rating}</b>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProductWrap