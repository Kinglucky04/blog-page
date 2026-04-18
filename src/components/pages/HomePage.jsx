import React from 'react'
import { Link } from "react-router-dom";
import MainCategory from '../MainCategory';
import FeaturedPost from '../FeaturedPost';
import PostList from '../PostList';

function HomePage() {
  return (
    <div className='mt-4 flex flex-col gap-4'>
        <div className='flex gap-4'>
            <Link to="/" >Home</Link>
            <span>•</span>
            <span className='text-blue-800'>Blogs and Articles</span>
        </div>

        {/* Introduction */}
        <div className='flex items-center justify-between'>
              {/* titles */}
            <div>
                <h1 className='text-teal-400 text-2xl md:text-5xl lg:text-5xl font-bold'>Chronicles of a Web in Transition </h1>
                <p className='mt-2 text-md md:text-xl '>BlockForge is your daily blueprint for navigating Web2, mastering Web3, and building at the intersection.</p>
            </div>

              {/* animation buttons */}
            <Link to="/write" className="relative hidden md:block">
            {/* Rotating text circle */}
            <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                //className="animate-[spin_10s_linear_infinite]"
            >
                <defs>
                <path
                    id="circlePath"
                    d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                />
                </defs>

                <text fontSize="12" textAnchor="middle" fill="white" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="50%">
                    Document your Idea • Share your Journey •
                </textPath>
                </text>
            </svg>

            {/* Button inside the circle */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-[#00A8FF] hover:scale-110 transition-all duration-300 cursor-pointer border-none">
                <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#2D2F36"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>
            </Link>
        </div>

        <MainCategory />
        <FeaturedPost />

        <div className=''>
            <h1 className='my-8 text-2xl text-gray-400'>
                Recent Post
            </h1>
            <PostList />
        </div>
    </div>
  )
}

export default HomePage
