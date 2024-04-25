import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useFetch from "../Hooks/useFetch";
import MyOrderLoader from "../Loader/MyOrderLoader";
import noOrder from "../../../public/noOrder.json";
import Lottie from 'react-lottie';


const MyOrders = () => {
    const { user } = useContext(Context)
    const email = user?.email
    const [data, refetch] = useFetch("my-orders", email)
    console.log(data);
    return (
        <section>
            <h1 className="text-4xl text-center font-bold my-10">My Orders</h1>
            <div className="lg:w-3/5  mx-auto">
                {
                    data == "l" ?
                        <MyOrderLoader></MyOrderLoader>
                        :
                        data.length < 1 ?
                            <div className="my-5">
                                <h1 className="text-2xl font-bold text-center ">Oops, No orders yet!</h1>
                                <Lottie options={{ animationData: noOrder }} height={400} ></Lottie>
                            </div>
                            :
                            data.map((element, idx) => <Cards key={idx} card={element}></Cards>)
                }
            </div>
        </section>
    );
};

const Cards = ({ card }) => {
    return (
        <div className="flex w-full my-2 bg-slate-100 text-black text-lg font-semibold rounded-xl p-2 justify-between border-2">
            <div className="flex gap-10">
                <img className="w-16 object-cover" src={card.image} alt="" />
                <div className="my-auto">
                    <h1>{card.name}</h1>
                    <h1>{card.brand}</h1>
                </div>
                <div className="my-auto">
                    <h1>Price: {card.price}</h1>
                    <h1>Quantity: {card.quantity}</h1>
                    <h1>Size: {card.size}</h1>

                </div>
            </div>
            <div className="my-auto">
                <h1><span>Status: </span><span className="border-2 bg-white p-1 rounded-xl">pending</span></h1>
            </div>
        </div>
    )
}

export default MyOrders;