import React from 'react';

const TopBrand = () => {

    const handleImage =()=>{
        console.log("hello");
    }
    return (
        <section className='space-y-3'>
            <h1 className='text-4xl font-bold text-center my-10'>Top Brands Products</h1>
            <div className='flex gap-10 justify-center'>
                <img onMouseEnter={handleImage}  src="https://i.ibb.co/5xFK9wF/desktop-wallpaper-best-nike-logo-gallery.jpg" className='w-60 h-52 object-cover rounded-xl' alt="" />
                <img src="https://i.ibb.co/sQKVxt5/Adidas.jpg" className='w-60 h-52 object-cover rounded-xl' alt="" />
                <img src="https://i.ibb.co/8DZdk9T/25a66a451a9a26fcbe9c3b7cff9308fd.png" className='w-60 h-52 object-cover rounded-xl' alt="" />
            </div>
            <div className='flex gap-10 justify-center'>
                <img src="https://i.ibb.co/StNYwZ9/yamaha-racing-logo.jpg" className='w-60 h-52 object-cover rounded-xl' alt="" />
                <img src="https://i.ibb.co/8sZx90W/lenovo-logo-design.png" className='w-60 h-52 object-cover rounded-xl' alt="" />
            </div>
        </section>
    );
};

export default TopBrand;