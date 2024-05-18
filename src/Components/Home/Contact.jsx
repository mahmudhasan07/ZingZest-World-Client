import React, { useContext } from 'react';
import contact from '../../../public/contactUs.json'
import Lottie from 'lottie-react';
import { Context } from '../ContextAPI/ContextAPI';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const { user } = useContext(Context)

    const handleContact = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value
        const subject = from.subject.value
        const description = from.description.value

        const contactData = { name, subject, description }

        if (user?.email) {
            emailjs.send("service_k66xk9s", "template_lmmlqmg", contactData, {
                publicKey: 'hBm6FCmTz2fLTfKOC',
            })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>{
                console.log(err);
            })
        }


    }

    return (
        <section>
            <h1 className="lg:text-4xl md:text-4xl text-3xl text-center font-bold">Contact With US</h1>
            <div className='flex justify-around flex-wrap gap-5'>
                <div>
                    <Lottie animationData={contact}></Lottie>
                </div>
                <div className='bg-slate-100 w-1/3 my-auto p-5 rounded-2xl'>
                    <form onSubmit={handleContact} action="" className='space-y-4'>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Email</label> <br />
                            <input name='email' defaultValue={user?.email} type="email" className='rounded-xl w-72 p-1 border-2 border-black' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Subject</label> <br />
                            <input name='subject' type="text" className='rounded-xl w-72 p-1 border-2 border-black' />
                        </div>
                        <div>
                            <label className='text-lg font-semibold' htmlFor="">Description</label> <br />
                            <textarea name="description" id="" className='rounded-xl w-96 h-36 p-1 border-2 border-black'></textarea>
                        </div>
                        <div className='mx-auto w-fit'>
                            <button className='btn'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;