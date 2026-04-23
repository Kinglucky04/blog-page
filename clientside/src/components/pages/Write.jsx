import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData, setData } from "../../utils/storage";
import { useUser } from '@clerk/clerk-react'
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

function Write() {
  const { isLoaded, isSignedIn } = useUser();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();


    const handleSubmit = (e) => {
      e.preventDefault();

      if (!title || !content || !category) {
        alert("Fill all fields");
        return;
      }

      const posts = getData("posts") || [];

      const newPost = {
        id: Date.now(),
        title,
        content,
        desc,
        category,
        image,
        authorEmail: "test@example.com"
      };

      const updatedPosts = [newPost, ...posts];

      setData("posts", updatedPosts);

      navigate(`/post/${newPost.id}`);
    };


    const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    const img = new window.Image();
    img.src = event.target.result;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const maxWidth = 800;
      const scale = maxWidth / img.width;

      canvas.width = maxWidth;
      canvas.height = img.height * scale;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressed = canvas.toDataURL("image/jpeg", 0.7);

      setImage(compressed);
    };
  };

  reader.readAsDataURL(file);
};

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if(isLoaded && !isSignedIn) {
    return <div>Please sign in to write a post.</div>;
  }
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light text-gray-400'>Create a new post</h1>

      <form onSubmit={handleSubmit} className=' flex flex-col gap-8 flex-1 mb-8'>
       <input type="file" onChange={handleImageUpload} />
        {/* <input type="text" placeholder=' Share Your Awesome Story'  className=' text-white font-bold text-3xl outline-none'/> */}
        <input
          type="text"
          placeholder='Share Your Awesome Story'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='text-white font-bold text-3xl outline-none'
        />

        <div className='flex items-center gap-2'>
          <label htmlFor="" className='text-sm'>Category</label>
         <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='bg-white text-gray-500 rounded-xl p-2 text-sm'
              >
                    <option value="">Select Category</option>
                    <option value="web-design">Web Design</option>
                    <option value="development">Development</option>
                    <option value="database">Database</option>
                    <option value="search-engine">Search Engine</option>
          </select>
        </div>

        <textarea
            placeholder='write a short description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='bg-white text-gray-900 p-4 rounded-xl'
          />

        <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            className='flex-1 bg-white rounded-xl text-black'
          />

        <button type="submit" className='bg-blue-600 p-2 w-36 cursor-pointer rounded-xl font-medium'>
            Publish
        </button>
      </form>
    </div>
  )
}


export default Write
