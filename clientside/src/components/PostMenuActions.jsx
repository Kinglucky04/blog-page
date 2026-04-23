import React from 'react'

function PostMenuActions({ onDelete }) {
  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex flex-col items-start gap-3 py-2 cursor-pointer text-sm'>
            <div className='flex flex-row gap-1'>
            </div>
            <div onClick={onDelete} className='flex flex-row gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
            <span>Delete This Post</span>
            </div>
           
      </div>
    </div>
  )
}

export default PostMenuActions
