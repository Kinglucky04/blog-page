import React from 'react'

function Search() {
  return (
    <div className='bg-gray-400 p-2 rounded-full flex items-center gap-2'>
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
          <input type="text" placeholder="Search a post "  className='bg-transparent' />
    </div>
  )
}

export default Search
