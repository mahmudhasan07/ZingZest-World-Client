import { useParams } from "react-router-dom";
import useFetch1 from "../Hooks/useFetch1";
// import { useParams } from "react-router-dom";

const Item = () => {
    const id = useParams()
    console.log(id);
    const [data,refetch] = useFetch1("search", id?.id)
    console.log(data);
    return (

        <section>
            <h1></h1>
            <div className="flex justify-start gap-8 mx-10">
            {
                data == "l" ?
                "loading"
                :
                data.map((element,idx)=> <Cards key={idx} card={element}></Cards> )
            }
            </div>
        </section>
    );
};

const Cards =({card})=>{
    return (
        <div className="w-52  border-2 border-gray-300 p-2 rounded-2xl">
            <img className="w-48 aspect-square object-contain" src={card?.allImages[0]} alt="" />
            <h1>{card?.name}</h1>
            <p>{card?.price}</p>
        </div>
    )
}

export default Item;