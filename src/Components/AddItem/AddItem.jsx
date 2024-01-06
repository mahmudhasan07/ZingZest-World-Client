import { useForm } from "react-hook-form";
import axios from "axios"
import { useState } from "react";


const AddItem = () => {
    const [image1, setimage1] = useState('')
    const [image2, setimage2] = useState('')
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        const image = data.imagefile[0]
        // image.append("upload_preset", "oczf2ldfff")
        console.log(image);
        const data2 = new FormData()
        data2.append("file", image)
        console.log(data2);


        

    }

    const handlefrom =(e)=>{
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const file = from.file.value
        console.log(name,email, image1);

        const data = new FormData()
        data.append('file', image1)
        data.append("upload_preset", "oczf2ldfff")

        axios.post(`https://api.cloudinary.com/v1_1/daudgshta/image/upload`, data)
            .then(res => {
                console.log(res.data.secure_url);
                setimage2(res.data.secure_url)


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
                    <input  className="border-2 border-black" defaultValue="test" {...register("example")} />

                    <input  className="border-2 border-black" {...register("imagefile", { required: true })} type="file" />

                    <input  className="" type="submit" />
                </form>
            </div>
            <div>
                <h1>Normal From</h1>
                <form onSubmit={handlefrom}>
                    <input name="name" className="border-2 " type="text" />
                    <input name="email" className="border-2 " type="text" />
                    <input name="file" className="border-2 " type="file" onChange={(e)=>setimage(e.target.files[0])} />
                    <button>Upload</button>
                </form>
            </div>
            <div>
                <img src={image2} alt="" />
            </div>
        </section>
    );
};

export default AddItem;