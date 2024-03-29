import { useNavigate, useParams } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
import { useEffect, useRef, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import { } from "./Item.css";
import { Rating, Star } from "@smastrom/react-rating";

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
        console.log(sortValue);

    }
    return (

        <section className="my-10">
            <h1 className="text-3xl font-semibold text-center">Your {id?.id} items</h1>
            <div className="flex justify-end mb-5 mr-10">
                <select onChange={handleSort} ref={sort} className="border-2 p-1 text-lg border-gray-400 rounded-xl w-40" id="">
                    <option value="default">Default</option>
                    <option value="sorta-b">Low to High</option>
                    <option value="sortb-a">High to Low</option>
                    <option value="toprating">Top Rating</option>
                </select>
            </div>
            <div className="flex justify-start gap-8 mx-10">
                {
                    data == "l" ?
                        "loading"
                        :
                        data == "A"?
                        "no data found"
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
            data-aos-easing="ease-in-sine" id="card" onClick={() => navigate(card._id)} className="w-64 text-center space-y-1 card border-2 shadow-xl border-gray-300 p-2 rounded-2xl">
            <img className="w-56 h-48 mx-auto aspect-square py-1 object-contain  " src={card?.allImages[0]} alt="" />
            <h1 className="text-lg font-bold">{card?.name}</h1>
            {
                card?.review ?
                    <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review} readOnly={true} itemStyles={myStyles} />
                    :
                    ""
            }
            <p className="font-semibold">TK. {card?.price}</p>
        </div>
    )
}

export default Item;