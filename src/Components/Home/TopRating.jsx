import { Rating, Star } from "@smastrom/react-rating";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";
import ProductLoader from "../Loader/ProductLoader";
import { useState } from "react";

const TopRating = () => {
    const [data, refetch] = useFetch("items", "toprating")
    console.log(data);
    return (
        <section className="my-20">
            <div>
                <div className=" my-5  mx-10 ">
                    <h1 className="text-4xl text-center font-bold">Top Rated Items</h1>
                    <div className="flex justify-end">
                        <button className="btn font-bold">Load More</button>
                    </div>
                </div>
                <div className="flex mx-5 justify-center gap-5 flex-wrap">
                    {
                        data == "l" ?
                            <ProductLoader></ProductLoader>

                            :
                            data.slice(0, 5).map((element, idx) => <Card key={idx} card={element}></Card>)
                    }
                </div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    const navigate = useNavigate()
    const [scale, setscale] = useState("scale-100");
    return (
        <div onMouseEnter={()=> setscale("scale-105")} onMouseLeave={()=>setscale("scale-100")} onClick={() => navigate(`/${card.category}/${card.categoryType}/${card._id}`)} className="card bg-slate-100 text-center cursor-pointer w-64 border-2 border-gray-400 p-2">
            <img src={card?.allImages[0]} className={`w-60 my-1 h-64 transition-all  mx-auto rounded-2xl object-cover object-top ${scale}`} alt="" />
            <h1 className="text-lg font-bold  mt-auto">{card.name}</h1>
            <div className="mt-auto">
                <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review} readOnly={true} itemStyles={{ itemShapes: Star, activeFillColor: '#ffb700', inactiveFillColor: '#fbf1a9' }} />
                <h1 className="font-semibold">TK. {card.price}</h1>
            </div>
            <p></p>
        </div>

    )
}

export default TopRating;