import React from 'react';
// import { SunspotLoader } from "react-awesome-loaders";
// import { SunspotLoader } from "react-awesome-loaders";
import loader from "../../../public/loader.json"
import Lottie from "lottie-react";



const ProductLoader = () => {
    return (
        <div className='mx-auto w-fit'>
            {/* <SunspotLoader
                gradientColors={["#6366F1", "#E0E7FF"]}
                shadowColor={"#3730A3"}
                desktopSize={"128px"}
                mobileSize={"100px"}
                
            /> */}
            <Lottie animationData={loader} className='w-80'></Lottie>

        </div>
    );
};

export default ProductLoader;