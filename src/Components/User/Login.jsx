import React from 'react';

const Login = () => {
    return (
        <section>
            <h1>Please LogIn to Purchase Your Favorite Product</h1>
            <form action="">
                <div>
                    <label htmlFor="">Email Address</label>
                    <input type="email" className='border-2 border-gray-400 w-60 rounded-xl' />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" className='border-2 border-gray-400 w-60 rounded-xl' />
                </div>
                <button className='btn bg-blue-600 hover:bg-blue-600 text-white text-lg'>LogIn</button>
            </form>
        </section>
    );
};

export default Login;