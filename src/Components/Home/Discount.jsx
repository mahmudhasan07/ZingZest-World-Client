import { useNavigate } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
import { Rating, Star } from "@smastrom/react-rating";
import {  } from "./Discount.css";
import { useState } from "react";
import { set } from "react-hook-form";


const Discount = () => {
    const [data, refetch] = useFetch1("discount", "electronicAccessories")
    const [hour, setHour] = useState(12)
    const [min, setMin] = useState(50)
    const [sec, setSec] = useState(60)

    // const timer = setInterval(()=>{
    //     setSec((pre)=> pre-1)
    //     console.log(sec);
    // },5000)
    return (
        <section className="lg:my-20 my-10">
            <div>
            <h1 className="text-4xl font-bold text-center my-10">Discounts of all Electronic Accessories</h1>

            
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    data == "l"?
                    "loading"
                    :
                    data.slice(0,5).map((element,idx)=><Card key={idx} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({card})=>{
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(`/${card.category}/${card.categoryType}/${card._id}`)} className="card text-center cursor-pointer w-64 border-2 border-gray-400 p-1">
            <img src={card?.allImages[0]} className="w-52 aspect-square object-contain" alt="" />
            <h1 className="text-lg font-semibold">{card.name}</h1> 
            <div className="mt-auto">
            <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review || 0} readOnly={true} itemStyles={{itemShapes: Star, activeFillColor: '#ffb700',inactiveFillColor: '#fbf1a9'}} />
            <h1 className="w-fit mx-auto relative">TK. <span className="middle relative">{card.price}</span> <span className=" ">{parseFloat(card?.price*(80/100))}</span></h1>
            </div>
            <p></p>
        </div>

    )
}

export default Discount;