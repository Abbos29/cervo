import React, { useState } from 'react'
import s from './ProductWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';
import NotFound from '@/components/ui/NotFound/NotFound';

const ProductWrap = ({ data }) => {
    const [active, setActive] = useState(0)
    const [focusedSize, setFocusedSize] = useState(0)
    const { t, i18n } = useTranslation()
    const isClient = useIsClient()

    const getLocalizedText = (item, key) => {
        const lang = i18n.language
        return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || ''
    }

    const characteristics = [
        { name: t('characteristics.dry'), rating: data?.dry },
        { name: t('characteristics.wet'), rating: data?.wet },
        { name: t('characteristics.snow'), rating: data?.snow },
        { name: t('characteristics.noise'), rating: data?.noise },
        { name: t('characteristics.treadwear'), rating: data?.tread_wear }
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
        <section className={s.productWrap}>
            {!data ? (
                <NotFound />
            ) : (
                <Container>
                    <Breadcrumbs lastTitle={getLocalizedText(data, 'name')} />
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
                                <h1>{getLocalizedText(data, 'name')}</h1>
                                <h2>{getLocalizedText(data?.category, 'name')}</h2>
                            </div>

                            <h3>{getLocalizedText(data, 'sub_title')}</h3>

                            <div
                                className={s.description}
                                dangerouslySetInnerHTML={{ __html: getLocalizedText(data, 'description') }}
                            />

                            <div className={s.sizes}>
                                {data?.sizes?.map((size, i) => (
                                    <div
                                        key={i}
                                        className={`${s.size} ${focusedSize === i ? s.active_size : ''}`}
                                        onClick={() => setFocusedSize(i)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            <div className={s.table}>
                                {isClient && characteristics.map((characteristic, index) => (
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
            )}
        </section>
    )
}

export default ProductWrap