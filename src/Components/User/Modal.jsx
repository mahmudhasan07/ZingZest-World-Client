import React from 'react';

const Modal = ({data}) => {

    const handleclose =()=>{
        document.getElementById("modal").style.display="none"
    }
    return (
        <section className='my-5 p-3'>
            <div className='flex justify-end'>
                <button onClick={handleclose} className='text-lg font-extrabold'>X</button>
            </div>
            <h1 className='text-3xl font-bold text-center my-5'>Update Your Information</h1>
            <div className='flex flex-wrap justify-around'>
                <div>
                    <label htmlFor="">Name</label> <br />
                    <input defaultValue={data?.name} type="text"  className='border-2 rounded-2xl border-gray-500 p-1 w-72' />
                </div>
                <div>
                    <label htmlFor="">Email</label> <br />
                    <input value={data?.email} type="text" name='email' className='border-2 rounded-2xl border-gray-500 p-1 w-72' />
                </div>
                
            </div>
            <div className='flex flex-wrap justify-around'>
                <div>
                    <label htmlFor="">Phone Number</label> <br />
                    <input defaultValue={data?.number} name='number' type="text" className='border-2 rounded-2xl border-gray-500 p-1 w-72' />
                </div>
                <div>
                    <label htmlFor="">Address</label> <br />
                    <input type="text" className='border-2 rounded-2xl border-gray-500 p-1 w-72' />
                </div>
                
            </div>
            <div className='flex justify-center mt-10'>
                <button className='btn'>Update</button>
            </div>
        </section>
    );
};

export default Modal;