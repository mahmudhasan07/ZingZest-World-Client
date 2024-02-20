import React, { useContext, useRef, useState } from 'react';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import { Context } from '../ContextAPI/ContextAPI';
import Swal from 'sweetalert2';
import useFetch from '../Hooks/useFetch';
import useFetch1 from '../Hooks/usefetch1';

const Comment = ({ id, rating }) => {
    const commentData = useRef()
    const { user } = useContext(Context)
    const [data, refetch] = useFetch1("comments", id)
    const [review, setreview] = useState(0)
    const axiosLink = useAxios(AxiosSource)

    // console.log(rating);
    console.log(rating);
    const handleComment = (e) => {
        e.preventDefault()
        const comment = commentData.current.value
        // console.log(comment);
        const email = user?.email
        const data = { comment, review, email, id }


        console.log(review);
        axiosLink.post("/comments", data)
            .then(res => {
                Swal.fire({
                    title: "Comment Successful",
                    text: "Your comment successfully post",
                    icon: "success"
                })
                if (rating == undefined) {

                    console.log(review);
                    // console.log(data);
                    axiosLink.patch(`/items/${id}`, { review })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
                if (rating > 0) {
                    console.log(review);
                    axiosLink.patch(`/items/${id}`, { review })
                        .then(res => {
                            console.log(res);
                        })
                        .catch(error => {
                            console.log(error);
                        })

                }
                refetch()

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className='lg:ml-10 md:ml-5 ml-0'>
            <h1 className='text-2xl font-semibold'>Comment Section</h1>
            <div className=" my-10 border-2 p-2 space-y-2 rounded-2xl border-gray-500 ">
                <p className="text-xl font-semibold">Enter your comment</p>
                <textarea ref={commentData} className="border-2 border-gray-400 rounded-xl p-2" rows={"5"} cols={"50"}></textarea>
                <div className='flex gap-3'>
                    <p>Review</p>
                    <button onClick={() => setreview((rating + 5) / 2 || 5)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐5</button>
                    <button onClick={() => setreview((rating + 4) / 2 || 4)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐4</button>
                    <button onClick={() => setreview((rating + 3) / 2 || 3)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐3</button>
                    <button onClick={() => setreview((rating + 2) / 2 || 2)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐2</button>
                    <button onClick={() => setreview((rating + 1) / 2 || 1)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐1</button>
                </div>
                <button onClick={handleComment} className="btn bg-blue-600 hover:bg-blue-600 text-white">Comment</button>
                <div>
                    <h1 className="text-xl font-semibold my-2">View other persons comment</h1>
                    <div className="border-2 space-y-3 overflow-auto h-64">
                        {
                            data == "l" ?
                                "loading"
                                :
                                data.map((element, idx) =>
                                    <div className='border-2 space-y-1 border-gray-500 p-2 rounded-2xl' key={idx}>
                                        <div>
                                            <h1 className='text-lg font-semibold'>{element?.email}</h1>
                                            <Rating
                                                placeholderRating={3.5}
                                                emptySymbol={<img src="assets/images/star-grey.png" className="icon" />}
                                                placeholderSymbol={<img src="assets/images/star-red.png" className="icon" />}
                                                fullSymbol={<img src="assets/images/star-yellow.png" className="icon" />}
                                            />

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