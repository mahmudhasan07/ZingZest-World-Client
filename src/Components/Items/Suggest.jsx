import { useNavigate } from "react-router-dom";
import useFetch1 from "../Hooks/usefetch1";


const Suggest = ({ card }) => {
    const [data, refetch] = useFetch1("search", card)
    // console.log(data);
    return (
        <section>
            <h1 className="text-2xl font-semibold">Similar product that you are finding</h1>
            <div className=" flex flex-wrap gap-3  my-5">
                {
                    data == "l" ?
                        "loading"
                        :
                        data.map((element, idx) => <Card key={idx} card={element}></Card>)
                }
            </div>

        </section>
    );
};

const Card = ({ card }) => {
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(`/${card.category}/${card.categoryType}/${card?._id}`)} className="w-40 border-gray-400 rounded-2xl text-center p-1 border-2">
            <img className="w-32 h-32 object-contain mx-auto" src={card.allImages[0]} alt="" />
            <h1 className="font-semibold">{card.name}</h1>
            <p>{card.price}TK</p>
        </div>
    )
}

export default Suggest;