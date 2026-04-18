import React from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'

function Comment() {
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
              Lucky Pam
            </Link>
            <span className='text-xs text-gray-400'>•</span>
            <span className='text-sm text-gray-400'>2 days ago</span>
          </div>
          
          <p className='text-gray-700 leading-relaxed'>
            I love this article easy to implement
          </p>

          <div className='flex items-center gap-4 mt-3'>
            <button className='text-gray-400 hover:text-blue-500 transition-colors text-sm flex items-center gap-1'>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
              </svg>
              <span>24</span>
            </button>
            <button className='text-gray-400 hover:text-red-500 transition-colors text-sm flex items-center gap-1'>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span>8</span>
            </button>
            <button className='text-gray-400 hover:text-gray-600 transition-colors text-sm'>
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment