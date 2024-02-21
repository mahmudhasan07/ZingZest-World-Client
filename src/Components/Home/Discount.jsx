import { useNavigate } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";


const Discount = () => {
    const [data, refetch] = useFetch1("discount", "electronicAccessories")
    return (
        <section>
            <h1>Discounts of all Electronic Accessories</h1>
            <div>
                {
                    data == "l"?
                    "loading"
                    :
                    data.map((element,idx)=><Card key={idx} card={element}></Card>)
                }
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
            <Rating className="mx-auto" style={{ maxWidth: 100 }} value={card?.review || 0} readOnly={true} itemStyles={{itemShapes: Star, activeFillColor: '#ffb700',inactiveFillColor: '#fbf1a9'}} />
            <h1>TK. {card.price}</h1>
            <p></p>
        </div>

    )
}

export default Discount;