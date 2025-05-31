import React from 'react'
import s from './BatteriesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const BatteriesWrap = () => {
    return (
        <>
            <section className={s.batteriesWrap}>
                <Container>
                    <div className={s.main}>
                        <img className={s.main_bg} src="/img/batteries-bg.png" alt="bg" />

                        <div className={s.top}>
                            <Breadcrumbs white={true}/>
                        </div>

                        <div className={s.wrapper}>
                            <div className={s.slider}>
                                <Swiper
                                    navigation={true}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    loop={true}
                                    mousewheel={true}
                                    keyboard={true}
                                    modules={[Navigation, Mousewheel, Keyboard]}
                                    className={s.customSwiper}
                                >
                                    <SwiperSlide>
                                        <img className={s.slide_image} src="/img/battery-1.png" alt="Cervo Battery" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={s.slide_image} src="/img/battery-1.png" alt="Cervo Battery" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={s.slide_image} src="/img/battery-1.png" alt="Cervo Battery" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className={s.slide_image} src="/img/battery-1.png" alt="Cervo Battery" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>


                            <div className={s.wrap}>
                                <div className={s.wrap_top}>
                                    <div>
                                        <h5>2025</h5>
                                        <h2>Cervo Accumulators</h2>
                                    </div>

                                    <div className={s.wrap_info}>
                                        <div className={s.wrap_info_card}>
                                            <p>Power</p>
                                            <b>40AH</b>
                                        </div>
                                        <div className={s.wrap_info_card}>
                                            <p>ISO</p>
                                            <b>9001</b>
                                        </div>
                                        <div className={s.wrap_info_card}>
                                            <p>For</p>
                                            <div className={s.wrap_cars}>
                                                <img src="/img/icon-car-1.svg" alt="icon" />
                                                <img src="/img/icon-car-2.svg" alt="icon" />
                                                <img src="/img/icon-car-3.svg" alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={s.content}>
                                    <p><span>CERVO BATTERIES</span> are specially designed to efficiently meet the power supply demands of equipment and engines across a wide range of car makes and models. These high-performance batteries ensure stable and reliable operation even under the most demanding conditions.</p>
                                    <p>Thanks to advanced technologies and specially formulated chemical compositions, CERVO BATTERIES are known for their long service life, resistance to deep discharge, and high starting power. Their design and components guarantee dependable engine starts in any weather conditions — from extreme heat to severe frost.</p>
                                    <p>Reliability, durability, and compatibility with modern automotive requirements make CERVO BATTERIES the optimal choice for both passenger vehicles and commercial transport. </p>
                                    <p>The batteries are specially designed for high-starting power and cycle capacity.</p>
                                </div>

                                <div className={s.sizes}>
                                    <h4>Available of Cervo Batteries: </h4>

                                    <div className={s.sizes_charts}>
                                        <div>40AH</div>
                                        <div>50AH</div>
                                        <div>60AH</div>
                                        <div>70AH</div>
                                        <div>80AH</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default BatteriesWrap