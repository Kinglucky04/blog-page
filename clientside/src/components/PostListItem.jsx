import React from 'react'
import { Link } from 'react-router-dom'
import Images from './Images'

function PostListItem({post}) {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block'>
        <Images src={post.image} className="rounded-2xl object-cover w-400 h-80" />
      </div>
      <div className='flex flex-col gap-4'>
        <Link to={`/post/${post.id}`} className='text-4xl font-semibold'>
            {post.title}
        </Link>
        {/* description */}
       <div className='flex items-center gap-2 text-gray-400 whitespace-nowrap overflow-hidden'>
          <span>Written by</span>
          <Link className='text-blue-400 truncate max-w-[150px]'>
            {post.authorEmail}
          </Link>
          <span>On</span>
          <Link className='text-blue-400'>{post.category}</Link>
          <span>2 hours ago</span>
        </div>
        <p>
            {post.content.replace(/<[^>]+>/g, "").slice(0, 150)}
          </p>
        <Link to={`/post/${post.id}`} className='underline text-sm text-blue-400'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
