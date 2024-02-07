import { useContext } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useFetch from "../Hooks/useFetch";

const MyOrders = () => {
    const { user } = useContext(Context)
    const email = user?.email
    const [data, refetch] = useFetch("my-orders", email)
    console.log(data);
    return (
        <section>
            <h1>My Orders</h1>
            <div>
                {
                    data == "l" ?
                        "loading"
                        :
                        data.map((element, idx) => <Cards key={idx} card={element}></Cards>)
                }
            </div>
        </section>
    );
};

const Cards = ({ card }) => {
    return (
        <div>
            
        </div>
    )
}

export default MyOrders;