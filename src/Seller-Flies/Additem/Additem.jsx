import { useState } from "react";
import { } from "./Additem.css";
import axios from "axios";


const Additem = () => {

    const [select, setselect] = useState('')
    const [newarray, setnewaray] = useState()
    const [datanum, setdatanum] = useState(0)
    const allimages = []
    let j = 0;
    // const [selectOption, setselectOption] = useState({})

    const fashionCloth =
        <>
            <option value="shirt">Shirts</option>
            <option value="tShirt">T-Shirts</option>
            <option value="pant">Pants</option>
            <option value="shoe">Shoes</option>
            <option value="other">Others</option>

        </>

    const electronicAccessories =
        <>
            <option value="mobile">Mobile</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="earbud">Earbuds</option>
            <option value="headphone">Headphones</option>
            <option value="other">Others</option>

        </>

    const healthBeauty =
        <>
            <option value="hairCare">Hair Care</option>
            <option value="skinCare">Skin Care</option>
            <option value="menCare">Men Care</option>
            <option value="womenCare">Women Care</option>
            <option value="other">Others</option>
        </>

    const carMotorbike =
        <>
            <option value="car">Cars</option>
            <option value="bike">MotorBikes</option>
            <option value="carParts">Car Parts</option>
            <option value="bikeParts">MotorBikes Parts</option>
            <option value="other">Others</option>
        </>

    const array = [5, 6, 7]
    // setnewaray(array)
    // console.log(newarray);

    const handleimageupload = (e) => {
        // console.log(e.target.files.length);
        const images = e.target.files

        for (let i = 0; i < images.length; i++, j++) {
            const element = images[i];
            console.log(element);
            const imageAPI = new FormData()
            imageAPI.append("file", element)
            imageAPI.append("upload_preset", "zingzestworld")
            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', imageAPI)
                .then(res => {
                    // console.log(res.data);

                    // allimages.push(res.data.secure_url)

                    // console.log(allimages);
                    setnewaray(res.data.secure_url)
                    console.log(j);
                
                    // localStorage.setItem(`data${i}`, res.data.secure_url);

                })
                .catch(err => {
                    console.log(err);
                })

        }
    }




    console.log(newarray);
    allimages.push(newarray)
    console.log(allimages);
    // console.log(datanum);


    return (
        <section>
            <h1 className="text-3xl font-bold text-center my-5">Add Your Item</h1>
            <div className="flex flex-row-reverse justify-around flex-wrap">
                <form className="w-3/4 mx-auto" action="">
                    <div className=" space-y-5">
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Name</label> <br />
                                <input type="text" name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Price</label> <br />
                                <input type="number" name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Quantity</label> <br />
                                <input type="text" name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Image (Add minimum 3 images )</label> <br />
                                <input type="file" name="" multiple id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" onChange={handleimageupload} />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div >
                                <label htmlFor="">Product Category</label> <br />
                                <select onChange={(e) => setselect(e.target.value)} name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl">
                                    <option value="default">Please choice your category</option>
                                    <option value="fashionCloth">Fashion & Clothing</option>
                                    <option value="electronicAccessories">Electronic Accessories</option>
                                    <option value="healthBeauty">Health & Beauty</option>
                                    <option value="carMotorbike">Cars & MotorBikes</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Product Category Type</label> <br />
                                <select name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl">
                                    <option value="">Please choice your category</option>
                                    {
                                        select == "fashionCloth" ?
                                            fashionCloth :
                                            select == "electronicAccessories" ?
                                                electronicAccessories :
                                                select == "healthBeauty" ?
                                                    healthBeauty :
                                                    select == "carMotorbike" ?
                                                        carMotorbike : ""
                                    }

                                </select>
                            </div>
                        </div>
                        <div className=" mx-16">
                            <label htmlFor="">Product Information (use "," every line end & প্রতিটি লাইনের শেষে  "," ব্যবহার করুন।)</label> <br />
                            <textarea name="" id="" className="border-2 rounded-2xl w-full h-44  border-gray-500"></textarea>
                        </div>
                        <div className="mx-auto w-2/3">
                            <button className="button2 w-full text-2xl">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="my-10 w-1/4 border-r-2">
                    <h1 className="text-2xl font-semibold text-center">Image Preview</h1>
                    <div className="flex justify-center gap-5">

                        {/* {
                            allimages.length > 0 ?
                                allimages.map((element, idx) => console.log(element))
                                :
                                <p>No image preview</p>
                        } */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Additem;