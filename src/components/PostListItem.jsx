import React from 'react'
import { Link } from 'react-router-dom'
import Images from './Images'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block'>
        <Images src="/blockforge-logo.png" className="rounded-2xl object-cover" alt="blockforge" />
      </div>
      <div className='flex flex-col gap-4'>
        <Link to="/test"  className='text-4xl font-semi-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </Link>
        <div className='flex items-center gap-2 text-gray-400'>
            <span>Written by</span>
            <Link className='text-blue-400'>Lucky Pam</Link>
            <span>On</span>
            <Link className='text-blue-400'>Web Design</Link>
            <span>2 days ago</span>
        </div>
        <p>Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems, and turning ideas into powerful digital products. In a fast-evolving tech landscape, staying relevant means continuously learning, experimenting, and adapting to new tools and frameworks.</p>
        <Link to="/test" className='underline text-sm text-blue-400'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
