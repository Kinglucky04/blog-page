import React from 'react'
import Images from '../Images'
import { Link } from 'react-router-dom'
import PostMenuActions from '../PostMenuActions'
import Search from '../Search'
import Comments from '../Comments'

function SinglePost() {
  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      
      {/* LEFT: POST */}
      <div className='lg:w-[70%] flex flex-col gap-8'>
        
        <h1 className='font-semibold uppercase'>Tech world</h1>

        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Writen by</span>
          <Link to="/test" className='text-blue-400'>Lucky Pam</Link>
          <span>On</span>
          <Link to="/test" className='text-blue-400'>Web Development</Link>
          <span>2 days ago</span>
        </div>

        <Images 
          src="/blockforge-logo.png" 
          alt="blockforge" 
          className="rounded-2xl w-full object-cover"
          w="600"
        />

        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        <p>
          Building the Future, One Line of Code at a Time

          Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
        </p>
        

        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>
            Software development is more than just writing code — it’s about solving real-world problems, creating scalable systems.
          </p>

          <p>
            This blog is your space to explore practical tutorials, coding tips, and real-world insights.
          </p>

          <p>
            Let’s build the future together, one line of code at a time.
          </p>
        </div>
         <Comments />
      </div>

      {/* RIGHT: AUTHOR */}
      <div className='lg:w-[30%] sticky top-8 h-max self-start px-4'>
        
        <h1 className='mb-4 text-sm font-medium'>Author</h1>

        <div className='flex items-center gap-3'>
          <Images 
            src="/blockforge-logo.png" 
            alt="blockforge" 
            className="rounded-full w-12 h-12 object-cover" 
            w="48" 
            h="48" 
          />
          <div>
            <Link to="/test" className='text-blue-400'>Lucky Pam</Link>
            <p className='text-sm text-gray-400'>A dedicated writer to the core</p>

             <div className='flex gap-4 mt-4'>
            <Link to="/test">
              <Images src="/blockforge-logo.png" alt="twitter" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
            <Link to="/test">
              <Images src="/blockforge-logo.png" alt="linkedin" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
          </div>
          </div>
        </div>
        <PostMenuActions />
        <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
        <div className='flex flex-col text-sm gap-2'>
          <Link to="" className='underline'>All</Link>
          <Link to="" className='underline'>Web Design</Link>
          <Link to="" className='underline'> Development</Link>
          <Link to="" className='underline'>Database</Link>
          <Link to="" className='underline'>Search Engine</Link>
        </div>
        <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
        <Search />  
      </div>
    </div>
    
  )
}

export default SinglePost