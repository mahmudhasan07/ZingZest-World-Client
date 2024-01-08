import React from 'react';
import shopping from "../../../public/service/online-supermarket.gif"
import delivery from "../../../public/service/delivery-truck.gif";
import cashon from "../../../public/service/cash-on-delivery.png";
import hightquality from "../../../public/service/high-quality.gif";
import lowcost from "../../../public/service/low-cost.png";
import returnservice from "../../../public/service/return.png";
import {  }     from "./Service.css";


const Service = () => {
    return (
        <section className='lg:my-10 my-6'>
            <h1 className='text-3xl font-bold text-center lg:mb-5 mb-3'>Our Service</h1>
            <div className='flex justify-center gap-5'>
                <div className='servicediv'>
                    <img src={shopping} alt="" />
                    <p>Best Shopping</p>
                </div>
                <div className='servicediv'>
                    <img src={delivery} alt="" />
                    <p>Delivery</p>
                </div>
                <div className='servicediv'>
                    <img src={hightquality} alt="" />
                    <p>Best Quality</p>
                </div>
                <div className='servicediv'>
                    <img src={lowcost} alt="" />
                    <p>Low Cost</p>
                </div>
                <div className='servicediv'>
                    <img src={cashon} alt="" />
                    <p>Cash On Delivery</p>
                </div>
                <div className='servicediv'>
                    <img src={returnservice} alt="" />
                    <p>Return Policy</p>
                </div>
                
            </div>
        </section>
    );
};

export default Service;