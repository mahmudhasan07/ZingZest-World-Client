import React, { useContext, useRef, useState } from 'react';
import useAxios, { AxiosSource } from '../Axios/useAxios';
import { Context } from '../ContextAPI/ContextAPI';
import Swal from 'sweetalert2';
import useFetch from '../Hooks/useFetch';

const Comment = () => {
    const commentData = useRef()
    const { user } = useContext(Context)
    const [data, refetch] = useFetch("comments")
    const [review, setreview] = useState(0)
    const axiosLink = useAxios(AxiosSource)
    console.log(data);

    const handleComment = (e) => {
        e.preventDefault()
        const comment = commentData.current.value
        console.log(comment);
        const email = user?.email
        const data = { comment, review, email }
        console.log(data);

        axiosLink.post("/comments", data)
            .then(res => {
                Swal.fire({
                    title: "Comment Successful",
                    text: "Your comment successfully post",
                    icon: "success"
                })
                refetch()

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <section className='lg:ml-10 md:ml-5 ml-0'>
            <h1 className='text-2xl font-semibold'>Comment Section</h1>
            <div className=" my-10 border-2 p-2 rounded-2xl border-gray-500 ">
                <p className="text-xl font-semibold">Enter your comment</p>
                <textarea ref={commentData} className="border-2 border-gray-400 rounded-xl p-2" rows={"5"} cols={"50"}></textarea>
                <div className='flex gap-3'>
                    <p>Review</p>
                    <button onClick={() => setreview(5)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐5</button>
                    <button onClick={() => setreview(4)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐4</button>
                    <button onClick={() => setreview(3)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐3</button>
                    <button onClick={() => setreview(2)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐2</button>
                    <button onClick={() => setreview(1)} className='btn btn-sm focus:bg-blue-600 focus:text-white'>⭐1</button>
                </div>
                <button onClick={handleComment} className="btn bg-blue-600 hover:bg-blue-600 text-white">Comment</button>
                <div>
                    <h1 className="text-xl font-semibold">View other persons comment</h1>
                    <div className="border-2 h-64">
                        {
                            data == "l" ?
                                "loading"
                                :
                                data.map((element, idx) =>
                                    <div className='border-2 border-gray-500 p-2 rounded-2xl' key={idx}>
                                        <div>
                                            <h1 className='text-lg font-semibold'>{element?.email}</h1>
                                            
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