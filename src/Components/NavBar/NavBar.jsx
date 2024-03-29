import Drawermodal from "./Drawermodal";
import logo from "../../../public/logo (2).png"
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useRef, useState } from "react";
import "./NavBar.css"
import { IoIosLogIn } from "react-icons/io";
import useFetch1 from "../Hooks/usefetch1";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import { Context } from "../ContextAPI/ContextAPI";
import NavBarTitles from "./NavBarTitles";

const NavBar = () => {
    const [value, setValue] = useState("")
    const inputData = useRef()
    const [array, setArray] = useState([])
    const [search, setSearch] = useState("hidden")
    const axiosLink = useAxios(AxiosSource)
    const navigate = useNavigate()
    const { user, logOut } = useContext(Context)
    const [userProfile, setUserProfile] = useState("hidden")

    console.log(user);


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
        <section className="border-b-2 border-black text-base font-semibold py-1 bg-blue-600 text-white">
            <div className="flex flex-wrap pt-1 lg:justify-around  justify-center gap-5">
                <div className="lg:hidden">
                    <Drawermodal></Drawermodal>
                </div>
                <div id="logo">
                    <NavLink to={'/'}><img className="w-60 text-white" src={logo} alt="" /></NavLink>
                </div>
                <div className="flex relative">
                    <input ref={inputData} onChange={handleInput}  type="text" className="border-2 border-gray-600 py-1 px-2 rounded-3xl w-80  text-black bg-white" />
                    <button onClick={handlesearch} className="text-2xl my-auto border-l-2 border-black text-black  end-1 absolute h-full px-1"><FaSearch className="" /></button>
                    <div id="seachscroll" className={`bg-white absolute h-96 overflow-auto top-12 w-full text-center p-3 rounded-lg z-50 text-black ${search}`}>
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
                    {
                        user ?
                            <div className="relative">
                                <div onMouseEnter={() => setUserProfile("flex")} onMouseLeave={() => setUserProfile("hidden")} className="flex gap-1">
                                    <img className="w-10  rounded-full object-cover" src={user?.photoURL} alt="" />
                                    <h1 className="my-auto">Hello,{user?.displayName}</h1>
                                </div>
                                <div onMouseEnter={() => setUserProfile("flex")} onMouseLeave={() => setUserProfile("hidden")} className={`z-50 absolute space-y-1 flex-col w-full text-center bg-white text-black p-2 top-10 rounded-2xl ${userProfile}`}>
                                    <NavLink to={`/my-profile`} className={`hover:bg-blue-300 rounded-2xl `}><h1>My Profile</h1></NavLink>
                                    <NavLink to={'/my-orders'} className={`hover:bg-blue-300 rounded-2xl `}><h1>My Orders</h1></NavLink>
                                    <NavLink to={'/login'} className={`hover:bg-blue-300 rounded-2xl p-1 mx-auto`}><button onClick={() => logOut()} className="flex justify-center"><IoIosLogIn className="text-2xl"></IoIosLogIn>logOut</button></NavLink>
                                </div>

                            </div>
                            :
                            <NavLink to={'/login'}><button className="flex"><IoIosLogIn className="text-2xl"></IoIosLogIn>logIn</button></NavLink>
                    }
                </div>
                <div className="text-2xl my-auto">
                    <button className="flex"><FaCartShopping /><span className="text-xl">Cart</span></button>
                </div>
                <div className="my-auto">
                    <NavLink to={`https://seller-zingzest.web.app`}><p>Become a seller</p></NavLink>
                </div>
            </div>
            <div className="lg:block hidden">
            <NavBarTitles></NavBarTitles>
            </div>
            
        </section>
    );
};

export default NavBar;