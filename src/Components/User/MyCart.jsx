import React, { useContext, useEffect, useState } from 'react';
import useFetch1 from '../Hooks/useFetch1';
import ContextAPI, { Context } from '../ContextAPI/ContextAPI';
import { useNavigate } from 'react-router-dom';
import noOrder from "../../../public/noOrder.json"
import Lottie from 'lottie-react';
import userLoader from "../../../public/userloading.json"
// import Lottie from "lottie-react";
// import useFetch1 from '../Hooks/useFetch1';
import { MdDeleteForever } from "react-icons/md";
import useAxios, { AxiosSource } from '../Axios/useAxios';
import Swal from 'sweetalert2';

const MyCart = () => {
    const { user } = useContext(Context)
    const [margin, setmargin] = useState("my-10");
    // console.log(user);
    const [data, refetch] = useFetch1("carts", user?.email)
    // console.log(data);
    useEffect(() => {

        if (data == "l") {
            return
        } else {
            if (data?.length < 3) {
                setmargin("my-24")
            }
            else {
                setmargin('my-10')
            }
        }
    }, [data]);
    return (
        <section className='my-5'>
            <h1 className='text-3xl font-semibold text-center my-6'>My Cart Products</h1>
            <div className={`space-y-3 my-10 ${margin}`}>

                {
                    data == "l" ?
                        <Lottie animationData={userLoader} className='w-96 my-12 mx-auto'></Lottie>
                        :
                        data.length < 1 ?
                            <Lottie animationData={noOrder} className='w-96 mx-auto'></Lottie>
                            :
                            data.map((item, idx) => <Card key={idx} item={item} id={idx}></Card>)
                }

            </div>
        </section>
    );
};

const Card = ({ item, id }) => {

    const navigate = useNavigate()
    const axiosLink = useAxios(AxiosSource)
    const { user } = useContext(Context)

    const ID = item?._id
    const [data, refetch] = useFetch1("carts", user?.email)

    // const cartID = {ID}

    const handleDelete = () => {

        axiosLink.delete(`/delete-card/${ID}`)

            .then(res => {
                Swal.fire({
                    title: "Delete Successful",
                    text: "Your cart product successfully delete",
                    icon: "success"
                });
                refetch()
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className='border-2 border-gray-400 bg-gray-200 p-2 flex justify-around w-2/5 mx-auto rounded-2xl '>
            <div className=' flex-1 my-auto'>
                <img src={item?.image} className='w-32 h-32 object-cover rounded-xl' alt="" />

            </div>

            <div className='my-auto flex-1 cursor-pointer' onClick={() => navigate(`/${item?.category}/${item?.categoryType}/${item?.productID}`)}>
                <h1 className='text-lg font-semibold'>{item?.name}</h1>
                <h1 className='text-lg font-semibold'>{item?.brand}</h1>
                <h1 className='text-lg font-semibold'>{item?.price}</h1>
            </div>
            <div className='my-auto'>
                <button onClick={handleDelete} className='btn'><MdDeleteForever className='text-2xl'></MdDeleteForever> Delete</button>
            </div>

        </div>
    )
}

export default MyCart;