import Drawermodal from "./Drawermodal";
import logo from "../../../public/logo (2).png"
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useRef, useState } from "react";
import "./NavBar.css"
import { IoIosLogIn } from "react-icons/io";
import useFetch1 from "../Hooks/usefetch1";
import useAxios, { AxiosSource } from "../Axios/useAxios";

const NavBar = () => {
    const [hide, sethide] = useState("hidden")
    const [hide1, sethide1] = useState("hidden")
    const [hide2, sethide2] = useState("hidden")
    const [hide3, sethide3] = useState("hidden")
    const [color, setcolor] = useState('')
    const [value, setValue] = useState("")
    const inputData = useRef()
    const [array, setArray] = useState([])
    const [search, setSearch] = useState("hidden")
    const axiosLink = useAxios(AxiosSource)
    const navigate = useNavigate()
    // const [data, refetch] = useFetch1("search", value)

    console.log(array);


    const handleInput = async (e) => {
        e.preventDefault()
        const length = inputData.current.value
        setValue(length)

        const data = await axiosLink.get(`/search/${length}`)
        // console.log(data.data);
        setArray(data.data)


        if (length.length > 1) {
            setSearch("block")
        }
        else {
            setSearch("hidden")
        }

    }
    const handlesearch = () => {
        navigate(`/search/${value}`)
        setSearch("hidden")
    }

    return (
        <section className="border-b-2 border-black text-base font-semibold bg-blue-600 text-white">
            <div className="flex pt-1 justify-around">
                <div className="">
                    <Drawermodal></Drawermodal>
                </div>
                <div id="logo">
                    <NavLink to={'/'}><img className="w-60" src={logo} alt="" /></NavLink>
                </div>
                <div className="flex relative">
                    <input ref={inputData} onChange={handleInput} type="text" className="border-2 border-gray-600 py-1 px-2 rounded-3xl w-80  text-black bg-white" />
                    <button onClick={handlesearch} className="text-2xl my-auto border-l-2 border-black text-black  end-1 absolute h-full px-1"><FaSearch className="" /></button>
                    <div className={`bg-white absolute top-12 w-full text-center p-3 rounded-2xl text-black ${search}`}>
                        {
                            array.length > 0 ?
                                array?.map((element, idx) =>
                                    <div id="searchCard" key={idx} className="border-2 border-gray-300 flex mb-2 rounded-xl">
                                        <img className="w-28 h-20 my-auto object-contain" src={element.allImages[0]} alt="" />
                                        <div className="my-auto text-start">
                                            <h1>{element.name}</h1>
                                            <p>{element.price} Tk</p>
                                        </div>
                                    </div>)
                                :
                                "No items found"
                        }
                    </div>
                </div>
                <div className="my-auto">
                    <NavLink><button className="flex"><IoIosLogIn className="text-2xl"></IoIosLogIn>logIn</button></NavLink>
                </div>
                <div className="text-2xl my-auto">
                    <button><FaCartShopping /></button>
                </div>
                <div className="my-auto">
                    <NavLink to={`ZWseller`}><p>Become a seller</p></NavLink>
                </div>
            </div>
            <div className="flex justify-center mt-2 font-semibold gap-5">
                <div className="type text-lg  relative">
                    <button onMouseEnter={() => sethide('flex')} onMouseLeave={() => sethide('hidden')} className={`${color}`}>Fashion & Clothing</button>
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
                    <button onMouseEnter={() => sethide1('flex')} onMouseLeave={() => sethide1('hidden')} className={`${color}`}>Electronic Accessories</button>
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
                    <button onMouseEnter={() => sethide2('flex')} onMouseLeave={() => sethide2('hidden')} className={`${color}`}>Health & Beauty</button>
                    <div onMouseEnter={() => sethide2('flex')} onMouseLeave={() => sethide2('hidden')} className={`type-under ${hide2} flex-col absolute   `}>
                        <NavLink to={'/health&beauty/hairCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Hair Care</button></NavLink>
                        <NavLink to={'/health&beauty/skinCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Skin Care</button></NavLink>
                        <NavLink to={'/health&beauty/menCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Men Care</button></NavLink>
                        <NavLink to={'/health&beauty/womenCare'} className={`hover:bg-gray-300 rounded-3xl`}><button>Women Care</button></NavLink>
                        {/* <NavLink to={'/health&beauty/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}
                    </div>
                </div>
                <div className="type text-lg">
                    <button onMouseEnter={() => sethide3('flex')} onMouseLeave={() => sethide3('hidden')} className={`${color}`}>Cars & MotorBikes</button>
                    <div onMouseEnter={() => sethide3('flex')} onMouseLeave={() => sethide3('hidden')} className={`type-under ${hide3} flex-col absolute   `}>
                        <NavLink to={'/cars&motorBikes/car'} className={`hover:bg-gray-300 rounded-3xl`}><button>Cars</button></NavLink>
                        <NavLink to={'/cars&motorBikes/bike'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes</button></NavLink>
                        <NavLink to={'/cars&motorBikes/carParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Car Parts</button></NavLink>
                        <NavLink to={'/cars&motorBikes/bikesParts'} className={`hover:bg-gray-300 rounded-3xl`}><button>Motorbikes Parts</button></NavLink>
                        {/* <NavLink to={'/cars&motorBikes/'} className={`hover:bg-gray-300 rounded-3xl`}><button>Others</button></NavLink> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default NavBar;