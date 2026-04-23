import React, { useState, useEffect } from 'react'
import { getData } from "../utils/storage";
import Comment from './Comment'


function Comments({ postId }) {

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
  const allComments = getData("comments") || [];
  const filtered = allComments.filter(
    (c) => String(c.postId) === String(postId)
  );
  setComments(filtered);
}, [postId]);

{/* adds comments  */}
  const handleAddComment = () => {
  if (!text.trim()) return;

  const newComment = {
    id: Date.now().toString(),
    postId,
    text,
    author: "Lucky Pam",
    createdAt: new Date().toLocaleString(),
    likes: 0
  };

  const existing = getData("comments") || [];
  const updated = [...existing, newComment];

  localStorage.setItem("comments", JSON.stringify(updated));

  setComments(prev => [...prev, newComment]);
  setText("");
};

  {/* handle reply  */}
  const handleReply = (parentId, text, clearInput) => {
  if (!text.trim()) return;

  const newReply = {
    id: Date.now().toString(),
    postId,
    parentId, 
    text,
    author: "Lucky Pam",
    createdAt: new Date().toLocaleString(),
    likes: 0
  };

  const existing = getData("comments") || [];
  const updated = [...existing, newReply];

  localStorage.setItem("comments", JSON.stringify(updated));

  setComments(prev => [...prev, newReply]);
  clearInput("");
};

  {/* handle delete  */}
  const handleDelete = (id) => {
  const allComments = getData("comments") || [];

  const updated = allComments.filter((c) => c.id !== id);

  localStorage.setItem("comments", JSON.stringify(updated));

  setComments(prev => prev.filter((c) => c.id !== id));
};

  {/* handle likes  */}
  const handleLike = (id) => {
  const allComments = getData("comments") || [];

  const updated = allComments.map((c) =>
    c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c
  );

  localStorage.setItem("comments", JSON.stringify(updated));

  setComments(prev =>
    prev.map((c) =>
      c.id === id ? { ...c, likes: (c.likes || 0) + 1 } : c
    )
  );
};

  return (
    <div className='flex flex-col gap-8 lg:w-3/5 '>
      <h1 className='text-xl underline text-gray-500 text-semibold'>Comments</h1>
      <div className='flex items-center justify-between w-full gap-8'>
        <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Write your Comment'
            className='bg-white w-full rounded-xl text-gray-700 py-4 px-4'
          ></textarea>
       <button
            onClick={handleAddComment}
            className='py-2 bg-blue-600 px-2 font-semibold rounded-xl m-4'
          >
            Send
          </button>
      </div>
 {comments
  .filter(c => !c.parentId)
  .map((comment) => (
    <div key={comment.id}>
      
      {/* MAIN COMMENT */}
      <Comment
        comment={comment}
        onDelete={handleDelete}
        onLike={handleLike}
        onReply={handleReply}
      />

      {/*  REPLIES GO HERE */}
      <div className="ml-8 border-l pl-4">
        {comments
          .filter(c => c.parentId === comment.id)
          .map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              onDelete={handleDelete}
              onLike={handleLike}
              onReply={handleReply}
            />
          ))}
      </div>

    </div>
))}
    </div>
  )
}

export default Comments
