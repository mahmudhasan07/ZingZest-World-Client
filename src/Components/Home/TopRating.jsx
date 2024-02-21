import { Rating, Star } from "@smastrom/react-rating";
import useFetch from "../Hooks/useFetch";
import { useNavigate } from "react-router-dom";

const TopRating = () => {
    const [data, refetch] = useFetch("items", "toprating")
    console.log(data);
    return (
        <section className="my-20">
            <div>
                <div className="flex my-5 justify-between mx-10 ">
                    <h1 className="text-3xl font-bold">Top Rated Items</h1>
                    <button className="btn font-bold">Load More</button>
                </div>
                <div className="flex mx-5 gap-5 flex-wrap">
                {
                    data == "l"?
                    "loading"
                    :
                    data.map((element,idx)=> <Card key={idx} card={element}></Card>)
                }
                </div>
            </div>
        </section>
    );
};

const Card = ({card})=>{
    const navigate = useNavigate()
    return(
        <div onClick={()=> navigate(`/${card.category}/${card.categoryType}/${card._id}`)} className="card text-center cursor-pointer w-60 border-2 border-gray-400 p-1">
            <img src={card?.allImages[0]} className="w-52 aspect-square object-contain" alt="" />
            <h1 className="text-lg font-semibold">{card.name}</h1> 
            <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review} readOnly={true} itemStyles={{itemShapes: Star, activeFillColor: '#ffb700',inactiveFillColor: '#fbf1a9'}} />
            <h1>TK. {card.price}</h1>
            <p></p>
        </div>

    )
}

export default TopRating;