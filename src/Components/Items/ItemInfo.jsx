import { useParams } from "react-router-dom";
import useFetch1 from "../Hooks/usefetch1";
import { useContext, useEffect, useState } from "react";
import useAxios, { AxiosSource } from "../Axios/useAxios";
import Swal from 'sweetalert2'
import Comment from "./Comment";
import { Context } from "../ContextAPI/ContextAPI";
import Suggest from "./Suggest";


const ItemInfo = () => {
    const id = useParams()
    const [data, refetch] = useFetch1("item", id?.id)
    const [imgNum, setimgNum] = useState(0)
    const [pSize, setpSize] = useState()
    const [quantity, setquantity] = useState(1)
    const { user } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)

    const handleQuantity = () => {
        if (quantity > 1) { setquantity((pre) => pre - 1) }
    }

    const handleBuy = () => {

        if (data !== "l") {
            const name = data.name
            const brand = data.brand
            const price = data.price
            const color = data.color
            const categoryType = data.categoryType
            const size = pSize
            const image = data.allImages[1]
            const idNumber = data._id
            const buyer = user?.email
            const buyProduct = { name, brand, price, color, size, idNumber, categoryType, image, quantity, buyer }
            console.log(buyProduct);
            axiosLink.post("/buy-items", buyProduct)
                .then(res => {
                    Swal.fire({
                        title: "Purchase Successful",
                        text: "Your product successfully purchase",
                        icon: "success"
                    });

                })
                .catch(error => {
                    console.log(error);
                })

        }
    }
    return (
        <section>
            <h1 className="text-3xl text-center font-bold my-10">Your product information</h1>
            {
                data == "l" ?
                    "loading"
                    :
                    <section>
                        <div className="flex">
                            <div className="flex-1 ">
                                <img className="w-80 mx-auto aspect-square object-contain" src={data.allImages[imgNum]} alt="" />
                                <div className="flex justify-center overflow-auto my-5 gap-10">
                                    {
                                        data?.allImages.map((element, idx) => <img onClick={() => setimgNum(idx)} className="w-20 h-16 object-contain" key={idx} src={element}></img>)
                                    }
                                </div>
                            </div>
                            <div className=" my-auto space-y-2 flex-1">
                                <h1 className="text-3xl font-bold">{data.name}</h1>
                                <p className="text-lg font-semibold">Brand: {data.brand}</p>
                                <p className="text-lg font-semibold">Tk: {data.price}</p>
                                {
                                    data.size.length > 1 ?
                                        <div>
                                            <p className="text-lg font-semibold">Available sizes</p>
                                            <div className="flex my-1">
                                                {
                                                    data.size.map((element, idx) => <button onClick={() => setpSize(element)} className="border-2 mx-1 p-1 rounded-lg w-8 h-8 text-center focus:bg-blue-500 focus:text-white" key={idx}>{element}</button>)
                                                }
                                            </div>
                                        </div>
                                        :
                                        ""
                                }
                                <p className="text-lg my-1 font-semibold">Quantity: <span onClick={handleQuantity} className="mx-1 text-xl cursor-pointer">-</span><span className="mx-2">{quantity}</span><span onClick={() => setquantity((pre) => pre + 1)} className="mx-1 text-xl cursor-pointer">+</span></p>
                                <div>
                                    <button onClick={handleBuy} className="btn bg-blue-600 hover:bg-blue-600 text-white text-lg">Buy</button>
                                    <button className="btn bg-blue-600 hover:bg-blue-600 text-white text-lg">Add to cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:ml-10 md:ml-5 ml-0 my-10">
                            <h1 className="text-2xl font-bold">Product Details</h1>
                            {
                                data?.details.map((element, idx) => <li className="text-lg" key={idx}>{element}</li>)
                            }
                        </div>
                    </section>

            }
            <div className="flex border-2 border-gray-400">
                <div className="w-1/3">
                    <Comment></Comment>
                </div>
                <div className=" w-1/2 mx-auto">{
                    data !== "l" ?
                        <Suggest card={data?.categoryType}></Suggest>
                        :
                        ""
                }
                </div>
            </div>

        </section>
    );
};

export default ItemInfo;