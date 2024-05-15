import React from 'react';
import "./Banner.css";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow"

const Banner = () => {
    return (
        <section className='my-10 mx-5'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay]}
                spaceBetween={30}
                loop={true}
                navigation={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,

                }}
                grabCursor={true}
                // pagination={{ clickable: true }}
                centeredSlides={true}
                slidesPerView={1.5}
                autoplay={{delay : 2500}}
                breakpoints={
                    {
                        425: {
                            // slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        768: {
                            // slidesPerView: 4,
                            spaceBetween: 10
                        },
                        1024: {
                            // slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }
                }

                // className='swiper-js'
                className='lg:w-11/12 md:w-11/12 lg:mx-2'
            >
                <SwiperSlide className='swiper-slider'><img src="https://i.ibb.co/6BnDMqf/Classy-Fashion-Style-Presentation.jpg" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="https://i.ibb.co/kHnZrjp/Classy-Fashion-Style-Presentation-2.gif" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="https://i.ibb.co/CMqdww0/Classy-Fashion-Style-Presentation-1.gif" alt="" /></SwiperSlide>
                <SwiperSlide className='swiper-slider'><img src="https://i.ibb.co/kHnZrjp/Classy-Fashion-Style-Presentation-2.gif" alt="" /></SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Banner;