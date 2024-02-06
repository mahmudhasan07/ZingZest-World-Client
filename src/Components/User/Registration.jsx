import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'
import { Context } from '../ContextAPI/ContextAPI';


const Registration = () => {
    const {createUser, logOut, updateInfo} = useContext(Context)

    const handleRegistration =(e)=>{
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value
        console.log(name,email,password);
        createUser(email,password)
        .then(res=>{
            console.log(res);
            updateInfo(name)
            .then(res=>{
                Swal.fire({
                    title: "Registration Successful",
                    text: "Your registration successfully complete",
                    icon: "success"
                  });
                  logOut()
            })
            .catch(error=>{
                console.log(error);
            })
        })
        .catch(error=>{
            console.log(error);
        })

    }
    return (
        <section className='bg-base-300 min-h-screen relative'>
            <div id='login' className={`border-2 w-1/2 mx-auto absolute left-1/4 top-12  bg-white flex flex-row-reverse justify-between`}>
                <div className='space-y-5 p-20  mx-auto'>
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
                            <label className='text-lg font-semibold' htmlFor="">Password</label> <br />
                            <input type="password" name='password' className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div className='text-end font-bold text-blue-700'>
                        </div>
                        <button className='btn bg-blue-600 hover:bg-blue-600 text-white text-lg'>LogIn</button>
                    </form>
                </div>
                <div id='registrationBanner' className='px-3 text-white'>
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