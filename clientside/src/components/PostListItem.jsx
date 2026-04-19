import React from 'react'
import { Link } from 'react-router-dom'
import Images from './Images'

function PostListItem() {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      <div className='md:hidden xl:block'>
        <Images src="/ai-nuclear-energy-future-innovation-disruptive-technology.jpg" className="rounded-2xl object-cover w-400 h-80" alt="blockforge" />
      </div>
      <div className='flex flex-col gap-4'>
        <Link to="/single-post"  className='text-4xl font-semi-bold'>
            How AI Is Reshaping the Tech Space and How Developers Can Stay Ahead
        </Link>
        <div className='flex items-center gap-2 text-gray-400'>
            <span>Written by</span>
            <Link className='text-blue-400'>Lucky Pam</Link>
            <span>On</span>
            <Link className='text-blue-400'>Web Design</Link>
            <span>2 hours ago</span>
        </div>
        <p>IArtificial Intelligence is no longer a distant concept reserved for research labs or science fiction. It is actively reshaping the technology landscape, redefining how software is built, how businesses operate, and how users interact with digital products. The real question is not whether AI will transform the tech space—it already is—but how developers can adapt and thrive in this rapidly evolving environment.</p>
        <Link to="/single-post" className='underline text-sm text-blue-400'>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
