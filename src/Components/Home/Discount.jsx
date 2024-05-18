import { useNavigate } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
import { Rating, Star } from "@smastrom/react-rating";
import { } from "./Discount.css";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import ProductLoader from "../Loader/ProductLoader";
import AOS from "aos"


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
                <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-center my-10">Discounts of all Electronic Accessories</h1>


            </div>
            <div className="flex flex-wrap justify-center gap-10">
                {
                    data == "l" ?
                        <ProductLoader></ProductLoader>
                        :
                        data.slice(0, 5).map((element, idx) => <Card key={idx} id={idx} card={element}></Card>)
                }
            </div>
        </section>
    );
};

const Card = ({ card, id }) => {
    const navigate = useNavigate()
    const [scale, setscale] = useState("scale-100");
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay={id * 250}
            data-aos-easing="ease-in-sine"
            onMouseEnter={() => setscale("scale-105")} onMouseLeave={() => setscale("scale-100")} onClick={() => navigate(`/${card.category}/${card.categoryType}/${card._id}`)} className="card text-center cursor-pointer bg-slate-100 w-64 border-2 border-gray-400 p-1">
            <img src={card?.allImages[0]} className={` my-1 h-52  mx-auto rounded-2xl object-cover object-top ${scale}`} alt="" />
            <h1 className="text-lg font-semibold">{card.name}</h1>
            <div className="mt-auto">
                <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review || 0} readOnly={true} itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }} />
                <h1 className="w-fit mx-auto relative">TK. <span className="middle relative">{card.price}</span> <span className=" ">{parseFloat(card?.price * (80 / 100))}</span></h1>
            </div>
            <p></p>
        </div>

    )
}

export default Discount;