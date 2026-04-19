import React from 'react'
import Comment from './Comment'
function Comments() {
  return (
    <div className='flex flex-col gap-8 lg:w-3/5 '>
      <h1 className='text-xl underline text-gray-500 text-semibold'>Comments</h1>
      <div className='flex items-center justify-between w-full gap-8'>
        <textarea name="comment" id="comment" placeholder='Write your Comment' className='bg-white w-full rounded-xl text-gray-700 py-4 px-4' ></textarea>
        <button className='py-2 bg-blue-600 px-2 font-semibold rounded-xl m-4'>Send</button>
      </div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
  )
}

export default Comments
