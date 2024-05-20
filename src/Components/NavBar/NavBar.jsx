import Drawermodal from "./Drawermodal";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext, useEffect, useRef, useState } from "react";
import "./NavBar.css"
import { IoIosLogIn } from "react-icons/io";
import useFetch1 from "../Hooks/useFetch1";
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
    const [length, setlength] = useState("");
    const [userProfile, setUserProfile] = useState("hidden")

    // console.log(user);

    // useEffect(() => {
    //     if (user?.email) {
    //         const Data = async () => {
    //             const data = await axiosLink.get(`/carts/${user?.email}`)
    //             console.log(data.data);
    //             setlength(data.data.length)
    //         }
    //         Data()
    //     }
    //     else {
    //         setlength('')
    //     }
    // }, [axiosLink, user?.email]);

    const [data, refetch] = useFetch1("carts", user?.email)
    useEffect(() => {
        if (data == "l" || data == "A") {
            return
        }
        else {
            setlength(data.length)
        }
    }, [data]);

    // console.log(data);


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

    // const handleSearchProduct =()=>{

    // }

    return (
        <section className="border-b-2 border-black text-base py-1 font-semibold bg-[#284098] text-white">
            <div className="flex justify-around ">

                <div className="flex">
                    <div className="lg:hidden my-auto">
                        <Drawermodal></Drawermodal>
                    </div>

                    <div id="logo" className=" lg:block md:block hidden my-auto">
                        <NavLink to={'/'} className={''}><img className="lg:w-56 md:w-40 w-32" src={'https://i.ibb.co/yPwjW6f/logo.png'} alt="" /></NavLink>
                    </div>
                </div>

                <div className="w-9/12 space-y-4">
                    <div className="flex flex-wrap pt-1  lg:justify-around  md:justify-center md:gap-5 gap-2">
                        <div className=" h-fit my-auto lg:mx-0 md:mx-0 mx-auto relative">
                            <input ref={inputData} onChange={handleInput} type="text" className="border-2 border-gray-600 py-1 px-2 rounded-3xl lg:w-96 md:w-72 w-64   text-black bg-white" />
                            <button onClick={handlesearch} className="text-2xl my-auto border-l-2 border-black text-black  end-1 absolute h-full px-1"><FaSearch className="" /></button>
                            <div id="seachscroll" className={`bg-white absolute h-96 overflow-auto border-2 border-gray-400 top-12 w-full text-center p-3 rounded-lg z-50 text-black ${search}`}>
                                {
                                    array.length > 0 ?
                                        array?.map((element, idx) =>
                                            <div id="searchCard" onClick={() => navigate(`/${element.category}/${element.categoryType}/${element._id}`) & setSearch("hidden")} key={idx} className="border-2 p-1 border-gray-300 flex justify-around cursor-pointer gap-5 mb-2 rounded-xl">
                                                <img className="w-28 h-20 rounded-xl my-auto border-2 flex-1 object-contain" src={element.allImages[0]} alt="" />
                                                <div className="my-auto flex-1 text-start">
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
                                            <img className="w-9 h-9  rounded-full object-cover object-top" src={user?.photoURL} alt="" />
                                            <h1 className="my-auto">Hello,{user?.displayName}</h1>
                                        </div>
                                        <div onMouseEnter={() => setUserProfile("flex")} onMouseLeave={() => setUserProfile("hidden")} className={`z-50 absolute space-y-1 flex-col w-full text-center bg-white text-black p-2 top-9 rounded-2xl ${userProfile}`}>
                                            <NavLink to={`/my-profile`} className={`hover:bg-blue-300 rounded-2xl `}><h1>My Profile</h1></NavLink>
                                            <NavLink to={'/my-orders'} className={`hover:bg-blue-300 rounded-2xl `}><h1>My Orders</h1></NavLink>
                                            <NavLink to={'/login'} className={`hover:bg-blue-300 rounded-2xl p-1 mx-auto`}><button onClick={() => logOut()} className="flex justify-center"><IoIosLogIn className="text-2xl"></IoIosLogIn>logOut</button></NavLink>
                                        </div>

                                    </div>
                                    :
                                    <NavLink to={'/login'}><button className="flex"><IoIosLogIn className="text-2xl"></IoIosLogIn>logIn</button></NavLink>
                            }
                        </div>
                        <div className="text-2xl my-auto relative lg:ml-0 md:ml-0  ml-auto">
                            <button onClick={() => navigate("/my-carts")} className="flex"><FaCartShopping /><span className="text-xl">Cart</span></button>
                            {
                                length ?
                                    <p className="text-sm absolute -top-3 border bg-white text-blue-600  rounded-full w-5 h-5 pl-1  end-5">{length}</p>
                                    :
                                    ""
                            }
                        </div>
                        <div className="my-auto lg:mr-0 md:mr-0 mr-auto">
                            <NavLink to={`https://seller-zingzest.web.app`}><p>Become a seller</p></NavLink>
                        </div>
                    </div>

                    <div className="lg:block hidden">
                        <NavBarTitles></NavBarTitles>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;