import { useState } from "react";


const Additem = () => {

    const [select, setselect] = useState('')
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




    return (
        <section>
            <h1>Add Your Item</h1>
            <div>
                <form className="w-3/4 border-2 mx-auto" action="">
                    <div className=" space-y-5">
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Name</label> <br />
                                <input type="text" name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Name</label> <br />
                                <input type="text" name="" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
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
                        <div className="w-2/3 mx-auto">
                            <label htmlFor="">Product Information (use "," every line end & প্রতিটি লাইনের শেষে একটি "," পরিবর্তে।)</label> <br />
                            <textarea name="" id="" className="border-2 w-full h-44  border-gray-500"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Additem;