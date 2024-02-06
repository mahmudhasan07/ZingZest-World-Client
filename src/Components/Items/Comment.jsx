import React, { useRef } from 'react';

const Comment = () => {
    const commentData = useRef()

    const handleComment = (e) => {
        e.preventDefault()
        const comment =  commentData.current.value
        console.log(comment);
    }

    return (
        <section>
            <div className="lg:ml-10 md:ml-5 ml-0 my-10 border-2 p-2 rounded-2xl border-gray-500 w-1/3">
                <p className="text-xl font-semibold">Comment Section :-</p>
                <textarea ref={commentData} className="border-2 border-gray-400 rounded-xl p-2" rows={"5"} cols={"50"}></textarea>
                <button onClick={handleComment} className="btn bg-blue-600 hover:bg-blue-600 text-white">Comment</button>
                <div>
                    <h1 className="text-xl font-semibold">View other persons comment</h1>
                    <div className="border-2">
                        <h1>Comment</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comment;