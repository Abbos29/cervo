import React from 'react'
import s from './ProductWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';

const ProductWrap = () => {
    const characteristics = [
        { name: 'Dry', rating: 2.8 },
        { name: 'Wet', rating: 2.2 },
        { name: 'Snow', rating: 3.6 },
        { name: 'Noise', rating: 2.8 },
        { name: 'Treadwear', rating: 4.5 }
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
                    <Breadcrumbs />
                    <div className={s.wrapper}>
                        <div className={s.gallery}>
                            <div className={s.gallery_images}>
                                <img src="/img/product-image-main.png" alt="image" />
                                <img src="/img/product-image-main.png" alt="image" />
                                <img src="/img/product-image-main.png" alt="image" />
                                <img src="/img/product-image-main.png" alt="image" />
                            </div>

                            <img className={s.gallery_main_image} src="/img/product-image-main.png" alt="image" />
                        </div>

                        <div className={s.content}>
                            <div className={s.top}>
                                <h1>Cervo Tires - Evrolux</h1>
                                <h2>Eurolux</h2>
                            </div>

                            <h3>Feel the Comfort Every Day</h3>

                            <p>
                                CERVO EVROLUX car tires - which is an elastic shell
                                located on the wheel rim. The tire is designed to absorb
                                minor vibrations caused by imperfections in the road
                                surface, to realize and absorb the forces occurring in
                                the contact patch and provide a high coefficient
                                of traction.
                            </p>

                            <div className={s.sizes}>
                                <div>R14</div>
                                <div>R15</div>
                                <div>R16</div>
                                <div>R17</div>
                                <div>R18</div>
                                <div>R19</div>
                                <div>R20</div>
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