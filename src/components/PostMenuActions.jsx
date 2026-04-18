import React from 'react'

function PostMenuActions() {
  return (
    <div>
      <h1 className='mt-8 mb-4 text-sm font-medium'>Actions</h1>
      <div className='flex flex-col items-start gap-3 py-2 cursor-pointer text-sm'>
            <div className='flex flex-row gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            <span>Save This Post</span>
            </div>
            <div className='flex flex-row gap-1'>
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
