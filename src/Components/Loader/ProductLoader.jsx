import React from 'react';
import { SunspotLoader } from "react-awesome-loaders";

const ProductLoader = () => {
    return (
        <div className='mx-auto w-fit'>
            <SunspotLoader
                gradientColors={["#6366F1", "#E0E7FF"]}
                shadowColor={"#3730A3"}
                desktopSize={"128px"}
                mobileSize={"100px"}
                
            />
        </div>
    );
};

export default ProductLoader;