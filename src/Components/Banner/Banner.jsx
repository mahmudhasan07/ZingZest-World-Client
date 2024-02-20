import React from 'react';
import { } from "./Banner.css";
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
        // <section className='bg-blue-200 flex flex-wrap justify-around py-5'>
        //     <div className='lg:w-1/3 text-center my-auto'>
        //         <h1 className='text-5xl font-bold'>Welcome To</h1>
        //         <h1 className='text-4xl my-2 font-extrabold'>ZingZst World</h1>
        //         <TypeAnimation
        //             style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '25px' }}
        //             sequence={[
        //                 `World largest's website where you can find any kind of products. Feel free to shopping in our website. We provide best quality with best price `,
        //                 1000,
        //                 '',
        //             ]}

        //             repeat={Infinity}
        //         />
        //         <p id='bannertext' className='text-lg'></p>

        //     </div>
        //     <div className='lg:w-1/3'>
        //         <div id='bannerborder' className=' '>
        //             <img  className='' src="https://i.ibb.co/56VPwFq/model1-removebg-preview.png" alt="" />
        //         </div>
        //     </div>
        // </section>

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
                autoplay={{delay : 2000}}

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