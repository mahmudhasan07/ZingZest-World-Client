import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useFetch from "../Hooks/useFetch";

const MyOrders = () => {
    const { user } = useContext(Context)
    const email = user?.email
    const [data, refetch] = useFetch("my-orders", email)
    console.log(data.length);
    return (
        <section>
            <h1 className="text-4xl text-center font-bold my-10">My Orders</h1>
            <div className="lg:w-1/2  mx-auto">
                {
                    data == "l" ?
                        "loading"
                        :
                        data.length >0?
                        "No orders yet!"
                        :
                        data.map((element, idx) => <Cards key={idx} card={element}></Cards>)
                }
            </div>
        </section>
    );
};

const Cards = ({ card }) => {
    return (
        <div className="flex w-full my-2 rounded-xl p-2 justify-between border-2">
            <div className="flex gap-10">
                <img className="w-16" src={card.image} alt="" />
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
                <h1><span>Status: </span><span className="border-2 bg-gray-100 rounded-xl">pending</span></h1>
            </div>
        </div>
    )
}

export default MyOrders;