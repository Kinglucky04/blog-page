import React, { useState } from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'

function Comment({ comment, onDelete, onLike, onReply }) {

  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  return (
    <div className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 mb-6 border border-gray-100'>
      <div className="flex items-start gap-3 p-5">
        <Images
          src="/blockforge-logo.png"
          alt="user"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
          w="40"/>

        <div className='flex-1'>
          <div className='flex items-center gap-2 flex-wrap mb-1'>
            <Link to="/profile" className='font-semibold text-gray-800 hover:text-blue-600 transition-colors'>
              {comment.author}
            </Link>
            <span className='text-xs text-gray-400'>•</span>
            <span className='text-sm text-gray-400'>{comment.createdAt}</span>
          </div>
          
          <p className='text-gray-700 leading-relaxed'>
           {comment.text}
          </p>

          <div className='flex items-center gap-4 mt-3'>
            <button onClick={() => onLike(comment.id)} className='text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center gap-1'>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
              </svg>
              <span>{comment.likes || 0}</span>
            </button>

            {/* every one can delete delete comments, comment should be restricted so only owners can delete their comment*/}
            <button
              onClick={() => onDelete(comment.id)}
              className='text-red-400 text-sm hover:underline'
            >
              Delete
            </button>
            <button
                onClick={() => setShowReply(prev => !prev)}
                className='text-gray-400 hover:text-gray-600 transition-colors text-sm'
              >
                Reply
              </button>

              {showReply && (
                    <div className="mt-3 flex gap-2">
                      <input
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                        className="border px-2 py-1 rounded w-full text-black border-blue-500 text-sm"
                      />
                      <button
                        onClick={() => {
                          onReply(comment.id, replyText, setReplyText);
                          setShowReply(false); // optional: close after send
                        }}
                        className="bg-blue-500 text-white px-3 rounded text-sm"
                      >
                        Send
                      </button>
                    </div>
                  )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment