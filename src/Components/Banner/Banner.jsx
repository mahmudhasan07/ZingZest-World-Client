import React from 'react';
import {  } from "./Banner.css";

const Banner = () => {
    return (
        <section className='bg-blue-100 flex justify-around py-5'>
            <div className='w-1/3 my-auto'>
                <h1 className='text-5xl font-bold'>Welcome To</h1>
                <h1 className='text-4xl my-2 font-extrabold'>ZingZst World</h1>
                <p id='bannertext' className='text-lg'>World largest's website where you can find any kind of products. Feel free to shopping in our website. We provide best quality with best price </p>

            </div>
            <div className='w-1/3'>
                <div id='bannerborder' className=' '>
                <img className='' src="https://i.ibb.co/56VPwFq/model1-removebg-preview.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;