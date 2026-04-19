import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'
function SideMenu() {
  return (
    <div className='px-4 h-max sticky top-8'>
      <h1 className='mb-4 text-sm font-medium'>Search</h1>
      <Search />
      <h1 className='mt-4 mb-4 text-sm font-medium'>Filters</h1>
      <div className='flex flex-col gap-4 text-sm mb-4'>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='sort' value='newest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-500 rounded-sm bg-white checked:bg-blue-700' />
            Newest
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='sort' value='popular' className='appearance-none w-4 h-4 border-[1.5px] border-blue-500 rounded-sm bg-white checked:bg-blue-700' />
            Most Popular
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='sort' value='trending' className='appearance-none w-4 h-4 border-[1.5px] border-blue-500 rounded-sm bg-white checked:bg-blue-700' />
            Trending bg-white
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name='sort' value='oldest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-500 rounded-sm bg-white checked:bg-blue-700' />
            Oldest
        </label>
      </div>
      <h1 className='mt-4 mb-4 text-md font-medium'>Category</h1>
      <div className='flex flex-col gap-4'>
          <Link to="/single-post" className='underline'>All</Link>
          <Link to="//single-post" className='underline'>Web Design</Link>
          <Link to="/single-post" className='underline'> Development</Link>
          <Link to="/single-post" className='underline'>Database</Link>
          <Link to="/single-post" className='underline'>Search Engine</Link>
      </div>
    </div>
  )
}

export default SideMenu
