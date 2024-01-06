import Drawermodal from "./Drawermodal";
import logo from "../../../public/logo (2).png"
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useState } from "react";
import "./NavBar.css"

const NavBar = () => {
    const [hide, sethide] = useState("hidden")
    const [hide1, sethide1] = useState("hidden")
    const [hide2, sethide2] = useState("hidden")
    const [hide3, sethide3] = useState("hidden")
    const [color, setcolor] = useState('')

    const handlesearch = () => {

    }

    return (
        <section className="border-b-2 border-black text-lg font-semibold bg-blue-600 text-white">
            <div className="flex pt-1 justify-around">
                <div className="">
                    <Drawermodal></Drawermodal>
                </div>
                <div id="logo">
                    <img className="w-60" src={logo} alt="" />
                </div>
                <div className="flex relative">
                    <input type="text" className="border-2 border-black p-2 rounded-3xl w-96  text-black bg-white" />
                    <button onClick={handlesearch} className="text-2xl my-auto border-l-2 border-black text-black  end-1 absolute h-full px-1"><FaSearch className="" /></button>
                </div>
                <div className="my-auto">
                    <NavLink><button className="">logIn</button></NavLink>
                </div>
                <div className="text-3xl my-auto">
                    <button><FaCartShopping /></button>
                </div>
            </div>
            <div className="flex justify-center mt-2 font-semibold gap-5">
                <div className="type text-lg  relative">
                    <button  onMouseEnter={()=>sethide('flex')} onMouseLeave={()=>sethide('hidden')} className={`${color}`}>Fashion & Clothing</button>
                    <div onMouseEnter={()=>sethide('flex')} onMouseLeave={()=>sethide('hidden')} className={` type-under ${hide} flex-col absolute left-0  bg-black text-white`}>
                        <NavLink><button>Shirt</button></NavLink>
                        <NavLink><button>T-Shirt</button></NavLink>
                        <NavLink><button>Pant</button></NavLink>
                        <NavLink><button>Shoes</button></NavLink>
                    </div>
                </div>
                <div className="type text-lg">
                    <button  onMouseEnter={()=>sethide1('flex')} onMouseLeave={()=>sethide1('hidden')} className={`${color}`}>Electronic Accessories</button>
                    <div onMouseEnter={()=>sethide1('flex')} onMouseLeave={()=>sethide1('hidden')} className={`type-under ${hide1} flex-col absolute  bg-black text-white`}>
                        <NavLink><button>Laptop</button></NavLink>
                        <NavLink><button>Desktop</button></NavLink>
                        <NavLink><button>Mobile</button></NavLink>
                        <NavLink><button>EarBuds</button></NavLink>
                        <NavLink><button>Headphones</button></NavLink>

                    </div>
                </div>
                <div className="type text-lg">
                    <button  onMouseEnter={()=>sethide2('flex')} onMouseLeave={()=>sethide2('hidden')} className={`${color}`}>Health & Beauty</button>
                    <div onMouseEnter={()=>sethide2('flex')} onMouseLeave={()=>sethide2('hidden')} className={`type-under ${hide2} flex-col absolute  bg-black text-white`}>
                        <NavLink><button>Hair Care</button></NavLink>
                        <NavLink><button>Skin Care</button></NavLink>
                        <NavLink><button>Men Care</button></NavLink>
                        <NavLink><button>Women Care</button></NavLink>
                    </div>
                </div>
                <div className="type text-lg">
                    <button  onMouseEnter={()=>sethide3('flex')} onMouseLeave={()=>sethide3('hidden')} className={`${color}`}>Cars & MotorBikes</button>
                    <div onMouseEnter={()=>sethide3('flex')} onMouseLeave={()=>sethide3('hidden')} className={`type-under ${hide3} flex-col absolute  bg-black text-white`}>
                        <NavLink><button>Cars</button></NavLink>
                        <NavLink><button>Motorbikes</button></NavLink>
                        <NavLink><button>Car Parts</button></NavLink>
                        <NavLink><button>Motorbikes Parts</button></NavLink>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default NavBar;