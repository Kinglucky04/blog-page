import React from 'react'
import { useUser } from '@clerk/clerk-react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // if (!isSignedIn) {
  //   return <div>Please sign in to write a post.</div>;
  // }

  if(isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>;
  }
  return (
    <div className='h-[calc(100vh-64px)]] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light text-gray-400'>Create a new post</h1>

      <form action="" className=' flex flex-col gap-8 flex-1 mb-8'>
        <button className=' w-max bg-white text-gray-700 p-2 rounded-xl text-sm font-semibold cursor-pointer'> Add a cover image</button>
        <input type="text" placeholder=' Share Your Awesome Story'  className=' text-white font-bold text-3xl outline-none'/>

        <div className='flex items-center gap-2'>
          <label htmlFor="" className='text-sm'>Category</label>
          <select name="cat" id="" className='bg-white text-gray-500 rounded-xl p-2 text-sm'>
            <option value="general">General</option>
            <option value="Web-design">Web Design</option>
            <option value="Development">Development</option>
            <option value="Database">Database</option>
            <option value="Search-Engine">Search Engine</option>
          </select>
        </div>
        <textarea name="desc" id="" placeholder=' write a short description' className='bg-white text-gray-900 p-4 rounded-xl'></textarea>
        <ReactQuill theme="snow"  className='flex-1 bg-white rounded-xl text-black'/>
        <button className='bg-blue-600 p-2 w-36 cursor-pointer rounded-xl font-medium'>Send</button>
      </form>
    </div>
  )
}

export default Write
