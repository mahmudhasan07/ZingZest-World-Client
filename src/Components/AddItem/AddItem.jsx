import { set, useForm } from "react-hook-form";
import axios from "axios"
import { useState } from "react";


const AddItem = () => {
    // const [image, setimage] = useState()
    const [image1, setimage1] = useState()
    const [image2, setimage2] = useState()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const image = {image: data.imagefile[0]}
        console.log(image);

        axios.post('https://api.imgbb.com/1/upload?key=890925a8320c10ec4aec72015adb4563')}

    let allimages = []

    const array = [5, 6, 7, 8, 9, 9, 8, 7, 6, 5]
    const uniqueArray = array.splice(0, 4)

    const hello = Array.from(uniqueArray)
    // const singleimage = image.map(element=> console.log(element))
    // console.log(image.length);
    if (image1?.length) {
        for (let i = 0; i < image1.length; i++) {
            // console.log(image[i]);
            allimages.push(image1[i])
        }
        // console.log(allimages);
    }

    const handlefrom = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        // const file = from.file.value
        // console.log(name, email, image1);

        allimages.map((element, idx) => {
            const image = new FormData()
            image.append('file', element)
            image.append("upload_preset", "oczf2ldfff")
            console.log(image);

            
        })
        console.log(image2);

        const naiImage = {imagenai : image2}

        axios.post(`https://api.cloudinary.com/v1_1/daudgshta/image/upload`, image2,{
            headers : {
                'Content-Type' : 'multipart/from-data',
                "upload_preset" : "oczf2ldfff"
            }
        })
                .then(res => {
                    console.log(res.data);
                    // setimage2(res.data.secure_url)


                })
                .catch(err => {
                    console.log(err);
                })


    }

    return (
        <section>
            <div>
                {/* React Hook From */}
                <h1>React Hook From</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="border-2 border-black" defaultValue="test" {...register("example")} />

                    <input className="border-2 border-black" {...register("imagefile", { required: true })} type="file" />

                    <input className="" type="submit" />
                </form>
            </div>
            <div>
                <h1>Normal From</h1>
                <form onSubmit={handlefrom}>
                    <input name="name" className="border-2 " type="text" />
                    <input name="email" className="border-2 " type="text" />
                    <input name="file" className="border-2 " multiple type="file" onChange={(e) => setimage2(e.target.files[0])} />
                    <button>Upload</button>
                </form>
            </div>
            <div>
                {/* <img src={image2} alt="" /> */}
            </div>
        </section>
    );
};

export default AddItem;