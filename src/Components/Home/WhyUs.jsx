import React from 'react';
import whyUs from "../../../public/WhyUS.json"
import Lottie from 'lottie-react';

const WhyUs = () => {
    return (
        <section className='lg:my-14 md:my-10 my-7 '>
            <h1 className='text-4xl font-bold  text-center'>Why You Purchase From Us</h1>
            <div className='flex flex-wrap my-6 justify-around'>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay={400}
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine">
                    <Lottie animationData={whyUs} className='w-[400px] bg-slate-50 border-2 rounded-xl'></Lottie>
                </div>
                <div
                 data-aos="fade-left"
                 data-aos-offset="300"
                 data-aos-delay={400}
                 data-aos-duration="500"
                 data-aos-easing="ease-in-sine"
                 className='my-auto space-y-5'>

                    <div className="collapse w-96 p-1 bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What type of product we provide?
                        </div>
                        <div className="collapse-content border-t-2 border-gray-500">
                            <p>We give genuine product from our seller</p>
                        </div>
                    </div>
                    <div className="collapse w-96 p-1 bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Is available 7 days return product?
                        </div>
                        <div className="collapse-content border-t-2 border-gray-500">
                            <p>Yes, Its available for all products.</p>
                        </div>
                    </div>
                    <div className="collapse w-96 p-1 bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What type of product we provide?
                        </div>
                        <div className="collapse-content border-t-2 border-gray-500">
                            <p>We give genuine product from our seller</p>
                        </div>
                    </div>
                    <div className="collapse w-96 p-1 bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Is available 7 days return product?
                        </div>
                        <div className="collapse-content border-t-2 border-gray-500">
                            <p>Yes, Its available for all products.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyUs;