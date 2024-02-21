import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Parallaxbanner = () => {
    return (
        <section>
            <div className='my-10'>
            <ParallaxBanner
      layers={[{ image: 'https://i.ibb.co/6Yykr62/hm-banner3.jpg', speed: -15 }]}
      className="aspect-[2/1]  bg-black">
         {/* <div className="absolute backdrop-blur-sm inset-0 flex items-center justify-center">
        <h1 className="text-6xl text-white font-bold">We Provide The Best Services With Good Quality</h1>
      </div> */}
      </ParallaxBanner>
                
            </div>
        </section>
    );
};

export default Parallaxbanner;