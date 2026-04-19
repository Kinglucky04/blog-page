import React from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'

function FeaturedPost() {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
      {/* first post */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6 '>
            <Images src="/web-design.avif" className="rounded-3xl object-cover" w={550}  h={400} alt="web-design" />

            <div className='flex items-center gap-4'>
                <h1 className='font-semibold lg:text-lg'>01.</h1>

                <Link to="/web-design" className='text-blue-400 lg:text-lg'>Web Design</Link>
                <span className='text-gray-500'>2 days ago</span>
            </div>
            <Link to="/single-post" className='text-xl lg:text-3xl font-semibold lg:font-bold'>In today’s digital world, your website is more than just an online presence.</Link>
      </div>
      {/* second post */}
      <div className='w-full lg:w-1/2 flex flex-col gap-4 '>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <Images src="/development.jpeg" className="rounded-3xl object-cover w-1/3" w={150} h={100} alt="development"/>
                <div className='w-2/3 aspect-video'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="/single-post" className='text-blue-400'>Development</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/single-post" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Software development is more than just writing code</Link>
                </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
               
                <Images src="/database.avif" className="rounded-3xl object-cover w-1/3" alt="database"/>
                <div className='w-2/3 aspect-video'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>03.</h1>
                        <Link to="/single-post" className='text-blue-400'>Database</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/single-post" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Software development is more than just writing code</Link>
                </div>
            
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                   <Images src="/search-engine.avif" className="rounded-3xl object-cover w-1/3" alt="search-engine"/>
                <div className='w-2/3 aspect-video'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>04.</h1>
                        <Link to="/single-post" className='text-blue-400'>Search Engine</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/single-post" className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium'>Software development is more than just writing code</Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default FeaturedPost
