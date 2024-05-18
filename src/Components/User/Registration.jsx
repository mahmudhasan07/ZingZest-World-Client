import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Context } from '../ContextAPI/ContextAPI';
import axios from 'axios';
import useAxios, { AxiosSource } from '../Axios/useAxios';


const Registration = () => {
    const { createUser, logOut, updateInfo } = useContext(Context)
    const axiosLink = useAxios(AxiosSource)

    const handleRegistration = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        const image = from.image.files[0]
        console.log(name, email, password);

        if (image) {
            axios.post('https://api.imgbb.com/1/upload?key=890925a8320c10ec4aec72015adb4563', { image },
                {
                    headers: {
                        "content-type": "multipart/form-data"
                    }
                })
                .then(res => {
                    const imageHost = res?.data?.data?.display_url
                    const data = { name, email, imageHost }
                    axiosLink.post("/client-users", data)
                        .then(res => {
                            console.log(res);
                            if (res.data == "Already Registration") {
                                Swal.fire({
                                    title: "Already Registration ",
                                    text: "Your already registration in this website ",
                                    icon: "warning"
                                });
                            }
                            else {
                                createUser(email, password)
                                    .then(res => {
                                        console.log(res);
                                        updateInfo(name, imageHost)
                                            .then(res => {
                                                Swal.fire({
                                                    title: "Registration Successful",
                                                    text: "Your registration successfully complete",
                                                    icon: "success"
                                                });
                                                logOut()
                                            })
                                            .catch(error => {
                                                console.log(error);
                                            })
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })

                })
                .catch(error => {
                    console.log(error);
                })
        }




    }
    return (
        <section className='bg-base-300 min-h-screen relative'>
            <div id='login' className={`border-2 lg:w-3/5  mx-auto absolute lg:left-1/4 lg:top-12 md:top-10 top-7  bg-white flex flex-wrap flex-row-reverse justify-between`}>
                <div className='space-y-5 lg:p-20 md:p-14 p-8 mx-auto'>
                    <h1 className='text-3xl font-bold'>Registration <span>First</span></h1>

                    <form onSubmit={handleRegistration} action="" className='w-fit space-y-5 mx-auto'>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Your Name</label> <br />
                            <input type="text" name='name' className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Email Address</label> <br />
                            <input type="email" name='email' className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Upload Your Image</label> <br />
                            <input type="file" name='image' className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Password</label> <br />
                            <input type="password" name='password' className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div className='text-end font-bold text-blue-700'>
                        </div>
                        <button className='btn bg-blue-600 hover:bg-blue-600 text-white text-lg'>Registration</button>
                    </form>
                </div>
                <div id='registrationBanner' className='px-3 lg:w-1/2 w-full text-white'>
                    <div className=' text-center mt-20 space-y-2'>
                        <h1 className='text-4xl font-bold'>Welcome To <br /> Our Website</h1>
                        <p className='text-xl font-semibold'>Please enter your Name, Email & password for registration</p>
                        <p className='text-2xl font-bold'>OR</p>
                        <p className=' font-semibold'>If you are an already user , please login in our website</p>
                        <NavLink to={'/login'}><button className='btn bg-transparent text-lg text-white my-2'>Sign In</button></NavLink>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Registration;