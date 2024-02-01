import { useEffect, useState } from "react";
import { } from "./Additem.css";
import axios from "axios";
import { ImCross } from "react-icons/im";
import useAxios, { AxiosSource } from "../../Components/Axios/useAxios";


const Additem = () => {

    const [select, setselect] = useState('')
    const [allimagesArray, setallimagesArray] = useState([])
    const [allimagesPreview, setallimagesPreview] = useState([])
    const [uploadImage, setuploadImage] = useState([])
    const [loading, setloading] = useState(true)
    const allImages = []
    const axiosLink = useAxios(AxiosSource)

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

    const handleimageupload = (e) => {
        const image = e.target.files
        // console.log(image);
        const imageArray = Array.from(image)
        const imagePreview = Array.from(image).map(element => URL.createObjectURL(element))
        // console.log(imageArray);
        setallimagesArray((preview) => preview.concat(imageArray))
        setallimagesPreview((preview) => preview.concat(imagePreview))

    }
    const handleRemoveImage = (id) => {
        console.log(id);
        setallimagesArray(allimagesArray.filter(element => allimagesArray[id] !== element))
        setallimagesPreview(allimagesPreview.filter(element => allimagesPreview[id] !== element))
    }

    // console.log(allimagesArray);
    // console.log(allimagesPreview);

    const handlefrom = (e) => {
        e.preventDefault()

        const from = e.target
        const name = from.pName.value
        const brand = from.pBrand.value
        const price = from.pPrice.value
        const quantity = from.pQuantity.value
        const color = from.pColor.value
        const category = from.pCategory.value
        const categoryType = from.pCategoryType.value
        const details = from.pDetails.value
        // console.log(allimagesArray);

        allimagesArray.forEach(element => {
            // console.log(element);

            const imageFormat = new FormData()
            imageFormat.append('file', element)
            imageFormat.append("upload_preset", 'zingzestworld')

            axios.post('https://api.cloudinary.com/v1_1/daudgshta/upload', imageFormat)
                .then(res => {
                    // console.log(res.data);
                    allImages.push(res.data.secure_url)
                    // console.log(allImages);
                    if(allImages.length == allimagesArray.length){
                        const data = {name,brand,price,quantity,color, allImages, category, categoryType, details}
                        console.log(data);
                       axiosLink.post('/addItem', data)
                       .then(res=>{
                        alert('Added Successfully');
                        console.log(res.data);
                       }) 
                       .catch(error=>{
                        console.log(error);
                        alert("Unsuccessful to Add")
                       })
                    }

                })
                .catch(error => {
                    console.log(error);
                })
        })

        // console.log(name);


    }


    return (
        <section>
            <h1 className="text-3xl font-bold text-center my-5">Add Your Item</h1>
            <div className="flex flex-row-reverse justify-around flex-wrap lg:my-10 my-6">
                <form onSubmit={handlefrom} className="w-3/4 mx-auto" action="">
                    <div className=" space-y-5">
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Name</label> <br />
                                <input type="text" name="pName" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Brand</label> <br />
                                <input type="text" name="pBrand" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Price</label> <br />
                                <input type="number" name="pPrice" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Quantity</label> <br />
                                <input type="number" name="pQuantity" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="">
                                <label htmlFor="">Product Color</label> <br />
                                <input type="text" name="pColor" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" />
                            </div>
                            <div className="">
                                <label htmlFor="">Product Image (Add minimum 3 images )</label> <br />
                                <input type="file" name="" multiple id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl" onChange={handleimageupload} />
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div >
                                <label htmlFor="">Product Category</label> <br />
                                <select onChange={(e) => setselect(e.target.value)} name="pCategory" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl">
                                    <option value="default">Please choice your category</option>
                                    <option value="fashionCloth">Fashion & Clothing</option>
                                    <option value="electronicAccessories">Electronic Accessories</option>
                                    <option value="healthBeauty">Health & Beauty</option>
                                    <option value="carMotorbike">Cars & MotorBikes</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Product Category Type</label> <br />
                                <select name="pCategoryType" id="" className="border-2 w-96 border-gray-500 p-2 rounded-2xl">
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
                            <textarea name="pDetails" id="" className="border-2 rounded-2xl w-full h-44 p-2  border-gray-500"></textarea>
                        </div>
                        <div className="mx-auto w-2/3">
                            <button className="button2 w-full text-2xl">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="my-10 w-1/4 border-r-2">
                    <h1 className="text-2xl font-semibold text-center underline">Image Preview</h1>
                    <div className="flex flex-wrap justify-center gap-5 my-4">
                        {
                            allimagesPreview.length > 0 ?
                                allimagesPreview.map((element, idx) =>
                                    <div key={idx} className="relative">
                                        <img id="uploadImage" onClick={() => handleRemoveImage(idx)} key={idx} src={element} alt="idx" className="w-24" />
                                        <ImCross className="absolute -top-1 -right-1"></ImCross>

                                    </div>)
                                :
                                "No Images Preview"
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Additem;