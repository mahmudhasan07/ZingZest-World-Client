import React, { useContext, useRef, useState } from 'react';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import { Context } from '../ContextAPI/ContextAPI';
import Swal from 'sweetalert2';
import useFetch from '../Hooks/useFetch';
import { Rating, Star } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import useFetch1 from '../Hooks/useFetch1';

const Comment = ({ id, rating }) => {
    const commentData = useRef()
    const { user } = useContext(Context)
    const [data, refetch] = useFetch1("comments", id)
    const [review, setreview] = useState(0)
    const [totalReview, settotalReview] = useState(0)
    const axiosLink = useAxios(AxiosSource)

    // console.log(rating);
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }


    const handleReview = (id) => {
        console.log(id);
        setreview(id)
        settotalReview((rating + id) / 2 || id)
    }


    const handleComment = (e) => {
        e.preventDefault()
        const comment = commentData.current.value
        // console.log(comment);
        const email = user?.email
        const data = { comment, review, email, id }


        console.log(review);
        console.log(totalReview);
        if(user?.email){
            axiosLink.post("/comments", data)
            .then(res => {
                Swal.fire({
                    title: "Comment Successful",
                    text: "Your comment successfully post",
                    icon: "success"
                })

                console.log(review);
                // console.log(data);
                axiosLink.patch(`/items/${id}`, { totalReview })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(error => {
                        console.log(error);
                    })


                refetch()

            })
            .catch(error => {
                console.log(error);
            })
        }
        else{
            Swal.fire({
                title: "Don't have logIn",
                text: "You don't have logIn yet",
                icon: "warning"
            })
        }
    }

    return (
        <section className='lg:mx-5 md:mx-10 mx-2'>
            <h1 className='text-2xl font-semibold'>Comment Section</h1>
            <div className=" my-10 border-2 p-2 space-y-2 rounded-2xl border-gray-500 ">
                <p className="text-xl font-semibold">Enter your comment</p>
                <textarea ref={commentData} className="border-2 border-gray-400 rounded-xl p-2 w-full" rows={"5"} ></textarea>
                <div className='flex flex-wrap gap-3'>
                    <p>Review</p>
                    <div className='gap-2 flex'>
                        <button onClick={() => handleReview(5)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐5</button>
                        <button onClick={() => handleReview(4)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐4</button>
                        <button onClick={() => handleReview(3)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐3</button>
                        <button onClick={() => handleReview(2)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐2</button>
                        <button onClick={() => handleReview(1)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐1</button>

                    </div>
                </div>
                <button onClick={handleComment} className="btn bg-blue-600 hover:bg-blue-600 text-white">Comment</button>
                <div>
                    <h1 className="text-xl font-semibold my-2">View other persons comment</h1>
                    <div className="border-2 border-gray-700 rounded-2xl space-y-3 p-1 bg-white overflow-auto h-64">
                        {
                            data == "l" ?
                                "loading"
                                :
                                data.length <1 ?
                                    <p className='text-center font-semibold'>No comment yet</p>
                                    :
                                    data.map((element, idx) =>
                                        <div className='border-2 space-y-1 border-gray-500 bg-gray-200 p-2 rounded-2xl' key={idx}>
                                            <div className='flex justify-between'>
                                                <h1 className='text-lg font-semibold'>{element?.email}</h1>
                                                <Rating style={{ maxWidth: 100 }} value={element?.review} readOnly={true} itemStyles={myStyles} />

                                            </div>
                                            <p>{element?.comment}</p>
                                        </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;