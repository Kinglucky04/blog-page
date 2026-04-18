import React from 'react'
import { Link } from "react-router-dom";
function MainCategory() {
  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 '>
      <div className=' flex-1 flex items-center justify-between flex-wrap'>
         <Link to="/posts" className='text-white bg-blue-500 rounded-full px-4 py-2'>All Post</Link>
          <Link to="/posts?cat=web-design" className='text-gray-700 rounded-full px-4 py-2'>Web Design</Link>
           <Link to="/posts?cat=development" className='text-gray-700 rounded-full px-4 py-2'>Development</Link>
            <Link to="/posts?cat=database" className='text-gray-700 rounded-full px-4 py-2'>DataBase</Link>
             <Link to="/posts?cat=search-engine" className='text-gray-700 rounded-full px-4 py-2'>Search Engine</Link>
      </div>

      <div className=' text-black text-4xl font-medium'>|</div>
      <div className='bg-gray-200 p-2 rounded-full flex items-center gap-2 text-gray-600'>
          <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search a post" className='bg-transparent border-none focus:outline-none ' />
      </div>
    </div>
  )
}

export default MainCategory
