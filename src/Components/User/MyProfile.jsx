import { useContext, useState } from "react";
import { Context } from "../ContextAPI/ContextAPI";
import useFetch1 from "../Hooks/usefetch1";
import Modal from "./Modal";

const MyProfile = () => {
    const { user } = useContext(Context)
    const email = user?.email
    console.log(email);
    const [data, refetch] = useFetch1("client-users", user?.email)
    const [modal, setModal] = useState()
    console.log(data);
    return (
        <section className="my-10">
            <h1 className="text-3xl my-10 font-bold text-center">Your Personal Information</h1>
            <div>
                {
                    data == "l" ?
                        "loading"
                        :
                        <div className="w-1/2 mx-auto">
                            <img className="rounded-full object-fill" src={data.imageHost} alt="" /> <br />
                            <div className=" space-y-2">
                                <div className="flex justify-end">
                                    <button onClick={()=> document.getElementById("modal").style.display="block"} className="text-lg text-blue-600 hover:underline">Edit</button>
                                    <dialog id="modal"  className=" border-2 lg:w-1/2 md:w-3/4 w-full top-1/3 shadow-2xl rounded-2xl">
                                        <Modal data={data}></Modal>
                                    </dialog>
                                </div>
                                <h1 className="text-xl"><span className="font-semibold">Name:</span>{data?.name}</h1>
                                <h1 className="text-xl"><span className="font-semibold">Email:</span>{data?.email}</h1>

                                <h1 className="text-xl"><span className="font-semibold">Phone Number:</span>{data?.number}</h1>
                                <h1 className="text-xl"><span className="font-semibold">Address:</span>{data?.address}</h1>
                            </div>
                        </div>
                }
            </div>

        </section>
    );
};

export default MyProfile;