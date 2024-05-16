import { useNavigate, useParams } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
import { useEffect, useRef, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import { } from "./Item.css";
import { Rating, Star } from "@smastrom/react-rating";
import ProductLoader from "../Loader/ProductLoader";
import noProduct from "../../../public/noProduct.json"
import Lottie from "lottie-react";

const Item = () => {
    const id = useParams()
    const sort = useRef()
    const [sortData, setSortData] = useState()
    const [data, refetch] = useFetch1("search", id?.id, sortData)
    console.log(data);
    useEffect(() => {
        AOS.init()
    }, [])

    const handleSort = (e) => {
        e.preventDefault()
        const sortValue = sort.current.value

        setSortData(sortValue)
        // console.log(sortValue);

    }
    return (

        <section className="my-10">
            <h1 className="text-4xl font-bold text-center">Your {id?.id} items</h1>
            <div className="flex justify-end mb-5 mr-10">
                <select onChange={handleSort} ref={sort} className="border-2 p-1 text-lg border-gray-400 rounded-xl w-40" id="">
                    <option value="default">Default</option>
                    <option value="sorta-b">Low to High</option>
                    <option value="sortb-a">High to Low</option>
                    <option value="toprating">Top Rating</option>
                </select>
            </div>
            <div className="flex lg:justify-start justify-center flex-wrap my-5 gap-8 mx-10">
                {
                    data == "l" ?
                        <ProductLoader></ProductLoader>
                        :
                        data.length < 1 ?
                            <div className=" mx-auto bg-slate-100 rounded-3xl">
                                <Lottie animationData={noProduct} className="w-80 mx-auto"></Lottie>
                            </div>
                            :
                            data.map((element, idx) => <Cards key={idx} id={idx + 1} card={element}></Cards>)
                }
            </div>
        </section>
    );
};

const Cards = ({ card, id }) => {
    const navigate = useNavigate()
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay={id * 250}
            data-aos-easing="ease-in-sine" id="card" onClick={() => navigate(card._id)} className="w-64 text-center card border-2 shadow-2xl border-gray-400 p-2 bg-slate-200 rounded-2xl">
            <img className=" h-52 my-1 mx-auto rounded-2xl py-1 object-cover " src={card?.allImages[0]} alt="" />
            <div className="my-auto ">
            <h1 className="text-lg font-bold">{card?.name}</h1>
            {
                card?.review ?
                    <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review} readOnly={true} itemStyles={myStyles} />
                    :
                    ""
            }
            <p className="font-semibold">TK. {card?.price}</p>
            </div>
        </div>
    )
}

export default Item;