import { useParams } from "react-router-dom";
import useFetch1 from "../Hooks/usefetch1";
import { useState } from "react";


const ItemInfo = () => {
    const id = useParams()
    const [data, refetch] = useFetch1("item", id?.id)
    const [imgNum, setimgNum] = useState(0)
    console.log(data);
    return (
        <section>
            <h1 className="text-3xl text-center font-bold my-10">Your product information</h1>
            {
                data == "l" ?
                    "loading"
                    :
                    <section>
                        <div className="flex">
                            <div className="flex-1 border-2 ">
                                <img className="w-80 mx-auto aspect-square object-contain" src={data.allImages[imgNum]} alt="" />
                                <div className="flex justify-center my-5 gap-10">
                                    {
                                        data?.allImages.map((element,idx)=><img onClick={()=> setimgNum(idx)} className="w-20 h-16 object-contain" key={idx} src={element}></img>)
                                    }
                                </div>
                            </div>
                            <div className="border-2 flex-1">
                                <h1 className="text-2xl font-bold">{data.name}</h1>
                                <p className="text-lg font-semibold">Brand: {data.brand}</p>
                                <p className="text-lg font-semibold">Tk: {data.price}</p>
                                <div>
                                    <button className="btn bg-blue-600 hover:bg-blue-600 text-white">Buy</button>
                                    <button className="btn bg-blue-600 hover:bg-blue-600 text-white">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </section>
            }
        </section>
    );
};

export default ItemInfo;