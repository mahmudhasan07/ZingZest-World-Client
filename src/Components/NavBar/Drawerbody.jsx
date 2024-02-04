import React from 'react';
import { NavLink } from 'react-router-dom';

const Drawerbody = () => {
    return (
        <section>
            <details className="collapse collapse-plus bg-blue-50 w-full">
                <summary className="collapse-title">Fashion & Clothing</summary>
                <div className="collapse-content flex flex-col p-1 text-center border-2 border-gray-300 rounded-2xl">
                    <NavLink to={'/fashion&clothing/shirt'} className={`hover:bg-gray-300 rounded-3xl`}><button>Shirt</button></NavLink>
                    <NavLink to={'/fashion&clothing/t-shirt'} className={`hover:bg-gray-300 rounded-3xl`}><button>T-Shirt</button></NavLink>
                    <NavLink to={'/fashion&clothing/sari'} className={`hover:bg-gray-300 rounded-3xl`}><button>Sari</button></NavLink>
                    <NavLink to={'/fashion&clothing/kurta'} className={`hover:bg-gray-300 rounded-3xl`}><button>Kurta</button></NavLink>
                    <NavLink to={'/fashion&clothing/pant'} className={`hover:bg-gray-300 rounded-3xl`}><button>Pant</button></NavLink>
                    <NavLink to={'/fashion&clothing/shoes'} className={`hover:bg-gray-300 rounded-3xl`}><button>Shoes</button></NavLink>
                </div>
            </details>
            <details className="collapse collapse-plus bg-blue-50 w-full">
                <summary className="collapse-title">Electronic Accessories</summary>
                <div className="collapse-content flex flex-col p-1 text-center border-2 border-gray-300 rounded-2xl">
                    <NavLink to={'/Electronic&accessories/laptop'} className={`hover:bg-gray-300 rounded-3xl`}><button>Laptop</button></NavLink>
                    <NavLink to={'/Electronic&accessories/desktop'} className={`hover:bg-gray-300 rounded-3xl`}><button>Desktop</button></NavLink>
                    <NavLink to={'/Electronic&accessories/mobile'} className={`hover:bg-gray-300 rounded-3xl`}><button>Mobile</button></NavLink>
                    <NavLink to={'/Electronic&accessories/earbud'} className={`hover:bg-gray-300 rounded-3xl`}><button>EarBuds</button></NavLink>
                    <NavLink to={'/Electronic&accessories/headphone'} className={`hover:bg-gray-300 rounded-3xl`}><button>Headphones</button></NavLink>
                </div>
            </details>
            <details className="collapse collapse-plus bg-blue-50 w-full">
                <summary className="collapse-title">Health & Beauty</summary>
                <div className="collapse-content flex flex-col p-1 text-center border-2 border-gray-300 rounded-2xl">
                    <NavLink to={'/health&beauty/hairCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Hair Care</button></NavLink>
                    <NavLink to={'/health&beauty/skinCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Skin Care</button></NavLink>
                    <NavLink to={'/health&beauty/menCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Men Care</button></NavLink>
                    <NavLink to={'/health&beauty/womenCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Women Care</button></NavLink>
                </div>
            </details>
            <details className="collapse collapse-plus bg-blue-50 w-full">
                <summary className="collapse-title">Cars & MotorBikes</summary>
                <div className="collapse-content flex flex-col p-1 text-center border-2 border-gray-300 rounded-2xl">
                    <NavLink to={'/cars&motorBikes/car'} className={`hover:bg-gray-300 rounded-3xl`}><button>Cars</button></NavLink>
                    <NavLink to={'/cars&motorBikes/bike'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes</button></NavLink>
                    <NavLink to={'/cars&motorBikes/carParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Car Parts</button></NavLink>
                    <NavLink to={'/cars&motorBikes/bikesParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes Parts</button></NavLink>
                </div>
            </details>
        </section>
    );
};

export default Drawerbody;