import React from 'react'
import { useState } from 'react'
import PostList from '../PostList'
import SideMenu from '../SideMenu'

function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className='mb-8 text-2xl'>Development Blog</h1>

        <button onClick={() => setOpen((prev) => !prev)} className='bg-blue-500 text-sm px-4 py-2 mb-8 rounded-3xl cursor-pointer font-medium md:hidden'>
          {open? "Close" : "Filter or Search"}
          </button>
      <div className='flex flex-col-reverse gap-8 md:flex-row'>
        <div className='w-4/5'>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} w-1/5 md:block `}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
