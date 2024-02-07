import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarTitles = () => {
    const [hide, sethide] = useState("hidden")
    const [hide1, sethide1] = useState("hidden")
    const [hide2, sethide2] = useState("hidden")
    const [hide3, sethide3] = useState("hidden")
    return (
        <div className="flex justify-center mt-2 font-semibold gap-5">
            <div className="type text-lg  relative">
                <button onMouseEnter={() => sethide('flex')} onMouseLeave={() => sethide('hidden')}>Fashion & Clothing</button>
                <div onMouseEnter={() => sethide('flex')} onMouseLeave={() => sethide('hidden')} className={` type-under ${hide} flex-col absolute left-0   `}>
                    <NavLink to={'/fashion&clothing/shirt'} className={`hover:bg-gray-300 rounded-3xl`}><button>Shirt</button></NavLink>
                    <NavLink to={'/fashion&clothing/t-shirt'} className={`hover:bg-gray-300 rounded-3xl`}><button>T-Shirt</button></NavLink>
                    <NavLink to={'/fashion&clothing/sari'} className={`hover:bg-gray-300 rounded-3xl`}><button>Sari</button></NavLink>
                    <NavLink to={'/fashion&clothing/kurta'} className={`hover:bg-gray-300 rounded-3xl`}><button>Kurta</button></NavLink>
                    <NavLink to={'/fashion&clothing/pant'} className={`hover:bg-gray-300 rounded-3xl`}><button>Pant</button></NavLink>
                    <NavLink to={'/fashion&clothing/shoes'} className={`hover:bg-gray-300 rounded-3xl`}><button>Shoes</button></NavLink>
                    {/* <NavLink to={'/fashion&clothing/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}
                </div>
            </div>
            <div className="type text-lg">
                <button onMouseEnter={() => sethide1('flex')} onMouseLeave={() => sethide1('hidden')} >Electronic Accessories</button>
                <div onMouseEnter={() => sethide1('flex')} onMouseLeave={() => sethide1('hidden')} className={`type-under ${hide1} flex-col absolute   `}>
                    <NavLink to={'/Electronic&accessories/laptop'} className={`hover:bg-gray-300 rounded-3xl`}><button>Laptop</button></NavLink>
                    <NavLink to={'/Electronic&accessories/desktop'} className={`hover:bg-gray-300 rounded-3xl`}><button>Desktop</button></NavLink>
                    <NavLink to={'/Electronic&accessories/mobile'} className={`hover:bg-gray-300 rounded-3xl`}><button>Mobile</button></NavLink>
                    <NavLink to={'/Electronic&accessories/earbud'} className={`hover:bg-gray-300 rounded-3xl`}><button>EarBuds</button></NavLink>
                    <NavLink to={'/Electronic&accessories/headphone'} className={`hover:bg-gray-300 rounded-3xl`}><button>Headphones</button></NavLink>
                    {/* <NavLink to={'/Electronic&accessories/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}

                </div>
            </div>
            <div className="type text-lg">
                <button onMouseEnter={() => sethide2('flex')} onMouseLeave={() => sethide2('hidden')} >Health & Beauty</button>
                <div onMouseEnter={() => sethide2('flex')} onMouseLeave={() => sethide2('hidden')} className={`type-under ${hide2} flex-col absolute   `}>
                    <NavLink to={'/health&beauty/hairCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Hair Care</button></NavLink>
                    <NavLink to={'/health&beauty/skinCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Skin Care</button></NavLink>
                    <NavLink to={'/health&beauty/menCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Men Care</button></NavLink>
                    <NavLink to={'/health&beauty/womenCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Women Care</button></NavLink>
                    {/* <NavLink to={'/health&beauty/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}
                </div>
            </div>
            <div className="type text-lg">
                <button onMouseEnter={() => sethide3('flex')} onMouseLeave={() => sethide3('hidden')} >Cars & MotorBikes</button>
                <div onMouseEnter={() => sethide3('flex')} onMouseLeave={() => sethide3('hidden')} className={`type-under ${hide3} flex-col absolute   `}>
                    <NavLink to={'/cars&motorBikes/car'} className={`hover:bg-gray-300 rounded-3xl`}><button>Cars</button></NavLink>
                    <NavLink to={'/cars&motorBikes/bike'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes</button></NavLink>
                    <NavLink to={'/cars&motorBikes/carParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Car Parts</button></NavLink>
                    <NavLink to={'/cars&motorBikes/bikesParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes Parts</button></NavLink>
                    {/* <NavLink to={'/cars&motorBikes/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}
                </div>
            </div>

        </div>
    );
};

export default NavBarTitles;