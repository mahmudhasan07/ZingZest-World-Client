import React, { useContext, useEffect } from 'react';
import contact from '../../../public/contactUs.json'
import Lottie from 'lottie-react';
import { Context } from '../ContextAPI/ContextAPI';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import AOS from "aos"

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const { user } = useContext(Context)

    useEffect(() => {
        AOS.init()
    }, []);

    const handleContact = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const subject = from.subject.value
        const description = from.description.value

        const contactData = { email, subject, description }

        if (user?.email) {
            emailjs.send("service_k66xk9s", "template_lmmlqmg", contactData, {
                publicKey: 'hBm6FCmTz2fLTfKOC',
            })
                .then(res => {
                    toast('Email successfully delivered 📩📩', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                    });

                })
                .catch(err => {
                    console.log(err);
                })
        }
        else {
            Swal.fire({
                title: "Don't have logIn",
                text: "You don't have logIn yet",
                icon: "warning"
            })
        }


    }

    return (
        <section>
            <h1 className="lg:text-4xl md:text-4xl text-3xl text-center font-bold">Contact With US</h1>
            <div className='flex justify-around overflow-hidden flex-wrap gap-5'>
                <div
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-delay={400}
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine">
                    <Lottie animationData={contact}></Lottie>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-delay={400}
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine"
                    className='bg-slate-100 lg:w-1/3  my-auto p-5 rounded-2xl'>
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
                            <textarea name="description" id="" className='rounded-xl w-96 h-36 p-2 border-2 border-black'></textarea>
                        </div>
                        <div className='mx-auto w-fit'>
                            <button className='btn bg-[#284098] text-white hover:bg-[#8390fa]'>Submit</button>
                        </div>
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </section>
    );
};

export default Contact;