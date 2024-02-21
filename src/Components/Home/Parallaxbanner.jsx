import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

const Parallaxbanner = () => {
    return (
        <section>
            <div>
            <ParallaxBanner
      layers={[{ image: 'https://i.ibb.co/6Yykr62/hm-banner3.jpg', speed: -15 }]}
      className="aspect-[2/1]"
    />
                
            </div>
        </section>
    );
};

export default Parallaxbanner;