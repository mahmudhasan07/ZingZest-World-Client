import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { } from "./User.css";
import Swal from 'sweetalert2'
import { Context } from '../ContextAPI/ContextAPI';


const Login = () => {
    // const [rowreverse, setrowreverse] = useState('')
    const {signUser} = useContext(Context)
    const navigate = useNavigate()

    const handleLogIn = (e)=>{
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        signUser (email,password)
        .then(res=>{
            
              navigate('/')
        })
        .catch(error=>{
            console.log(error);
        })
    }



    
    return (
        <section className='bg-base-300 min-h-screen relative'>
            <div id='login' className={`border-2 w-1/2 mx-auto absolute left-1/4 top-12  bg-white flex justify-between`}>
                <div className='space-y-5 p-16  mx-auto'>
                    <h1 className='text-3xl font-bold'>LogIn <span>First</span></h1>

                    <form onSubmit={handleLogIn} action="" className='w-fit space-y-5 mx-auto'>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Email Address</label> <br />
                            <input name='email' type="email" className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Password</label> <br />
                            <input name='password' type="password" className='border-2 p-1 border-gray-400 w-60 rounded-lg' />
                        </div>
                        <div className='text-end font-bold text-blue-700'>
                            <p>Forget your password??</p>
                        </div>
                        <div>
                            <h1>LogIn With</h1>
                            <div>

                            </div>
                        </div>
                        <button className='btn bg-blue-600 hover:bg-blue-600 text-white text-lg'>LogIn</button>
                    </form>
                </div>
                <div id='loginBanner' className='px-3 text-white'>
                    <div className=' text-center mt-20 space-y-2'>
                        <h1 className='text-4xl font-bold'>Welcome Back <br /> To Our website</h1>
                        <p className='text-xl font-semibold'>Please Enter your Email & password</p>
                        <p className='text-2xl font-bold'>OR</p>
                        <p className=' font-semibold'>If you are a new user , please registration in our website</p>
                        <NavLink to={'/registration'}><button className='btn bg-transparent text-lg text-white my-2'>Sign Up</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;