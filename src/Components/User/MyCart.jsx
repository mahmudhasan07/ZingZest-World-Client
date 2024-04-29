import React, { useContext } from 'react';
import useFetch1 from '../Hooks/usefetch1';
import { Context } from '../ContextAPI/ContextAPI';
import { useNavigate } from 'react-router-dom';
// import useFetch1 from '../Hooks/useFetch1';

const MyCart = () => {
    const { user } = useContext(Context)
    // console.log(user);
    const [data, refetch] = useFetch1("carts", user?.email)
    console.log(data);
    return (
        <section className='my-5'>
            <h1 className='text-3xl font-semibold text-center my-6'>My Cart Products</h1>
            <div className='space-y-3'>

                {
                    data == "l" ?
                        "loading"
                        :
                        data.length < 1 ?
                            "No Product to Your Cart "
                            :
                            data.map((item, idx) => <Card key={idx} item={item} id={idx}></Card>)
                }

            </div>
        </section>
    );
};

const Card = ({ item, id }) => {

    const navigate = useNavigate()

    return (
        <div className='border-2 border-gray-400 bg-gray-200 p-2 flex justify-around w-2/5 mx-auto rounded-2xl '>
            <div className=' flex-1 my-auto'>
                <img src={item?.image} className='w-32 h-32 object-cover rounded-xl' alt="" />

            </div>

            <div className='my-auto flex-1 cursor-pointer' onClick={() => navigate(`/${item?.category}/${item?.categoryType}/${item?.productID}`)}>
                <h1 className='text-lg font-semibold'>{item.name}</h1>
                <h1 className='text-lg font-semibold'>{item.brand}</h1>
                <h1 className='text-lg font-semibold'>{item.price}</h1>
            </div>

        </div>
    )
}

export default MyCart;