import { useNavigate, useParams } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
import { useEffect, useRef, useState } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';
import {  } from "./Item.css";

const Item = () => {
    const id = useParams()
    const sort = useRef()
    const [sortData, setSortData] = useState()
    // console.log(id);
    const [data, refetch] = useFetch1("search", id?.id, sortData)
    // console.log(data);
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
                <select onClick={handleSort} ref={sort} className="border-2 p-1 text-lg border-gray-400 rounded-xl w-40" id="">
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
                        data.map((element, idx) => <Cards key={idx} id={idx + 1} card={element}></Cards>)
                }
            </div>
        </section>
    );
};

const Cards = ({ card, id }) => {
    const navigate = useNavigate()
    return (
        <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-delay={id * 300}
            data-aos-easing="ease-in-sine" id="card" onClick={() => navigate(card._id)} className="w-52 border-2 border-gray-300 p-2 rounded-2xl">
            <img className="w-48 aspect-square py-1 object-contain" src={card?.allImages[0]} alt="" />
            <h1 className="font-bold">{card?.name}</h1>
            <p className="font-semibold">TK. {card?.price}</p>
        </div>
    )
}

export default Item;