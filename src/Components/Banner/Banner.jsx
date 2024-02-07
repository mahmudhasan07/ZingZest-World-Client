import React from 'react';
import { } from "./Banner.css";
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <section className='bg-blue-200 flex flex-wrap justify-around py-5'>
            <div className='lg:w-1/3 text-center my-auto'>
                <h1 className='text-5xl font-bold'>Welcome To</h1>
                <h1 className='text-4xl my-2 font-extrabold'>ZingZst World</h1>
                <TypeAnimation
                    style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '25px' }}
                    sequence={[
                        `World largest's website where you can find any kind of products. Feel free to shopping in our website. We provide best quality with best price `,
                        1000,
                        '',
                    ]}
                    
                    repeat={Infinity}
                />
                <p id='bannertext' className='text-lg'></p>

            </div>
            <div className='lg:w-1/3'>
                <div id='bannerborder' className=' '>
                    <img  className='' src="https://i.ibb.co/56VPwFq/model1-removebg-preview.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;