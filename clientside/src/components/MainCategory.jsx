import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function MainCategory() {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <div className='hidden md:flex bg-white rounded-3xl xl:rounded-full p-2 shadow-lg items-center justify-center gap-8 '>
      <div className='flex w-1/2 items-center justify-around flex-wrap'>
         <Link to="/posts" className='text-white bg-blue-500 rounded-full px-2 py-1'>All Post</Link>
          <Link to="/posts?cat=web-design" className='text-gray-700 rounded-full px-2 py1'>Web Design</Link>
           <Link to="/posts?cat=development" className='text-gray-700 rounded-full px-2 py-1'>Development</Link>
            <Link to="/posts?cat=database" className='text-gray-700 rounded-full px-2 py-1'>DataBase</Link>
             <Link to="/posts?cat=search-engine" className='text-gray-700 rounded-full px-2 py-1'>Search Engine</Link>
      </div>

      <div className=' text-black text-4xl font-medium'>|</div>
      <div className='bg-gray-200 p-1 rounded-full flex items-center gap-2 text-gray-600 w-1/2'>
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
          <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a post"
              className='bg-transparent border-none focus:outline-none text-sm w-full'
              onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      navigate(`/posts?search=${query}`);
                    }
                  }}
            />
      </div>
    </div>
  )
}

export default MainCategory
