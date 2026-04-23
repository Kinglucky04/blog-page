import React from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";
import { getData } from "../../utils/storage";
import { useEffect } from "react";
import Images from '../Images'
import PostMenuActions from '../PostMenuActions'
import Search from '../Search'
import Comments from '../Comments'

function SinglePost() {

  const { id } = useParams();
  const navigate = useNavigate();
  const posts = getData("posts") || [];

  const post = posts.find(p => String(p.id) === String(id));

      useEffect(() => {
  if (!post) return;

  const history = getData("history") || [];

 const alreadyExists = history.some(
  (h) => String(h.postId) === String(post.id)
);


  if (alreadyExists) return;

  history.push({
    postId: post.id,
    userEmail: post.authorEmail
  });

  localStorage.setItem("history", JSON.stringify(history));
  }, [post]);

 if (!post) {
          return <div>Post not found</div>;
        }

  const handleDeletePost = () => {
  const confirmDelete = window.confirm("Delete this post?");

  if (!confirmDelete) return;

  const updatedPosts = posts.filter(
    p => String(p.id) !== String(id)
  );

  localStorage.setItem("posts", JSON.stringify(updatedPosts));

  navigate("/");
};

    {/* formatting time */}
      const formatTimeAgo = (dateString) => {
      if (!dateString) return "Just now";

      const now = new Date();
      const past = new Date(dateString);
      const diffInSeconds = Math.floor((now - past) / 1000);

      const minutes = Math.floor(diffInSeconds / 60);
      const hours = Math.floor(diffInSeconds / 3600);
      const days = Math.floor(diffInSeconds / 86400);

      if (diffInSeconds < 60) return "Just now";
      if (minutes < 60) return `${minutes} min ago`;
      if (hours < 24) return `${hours} hrs ago`;
      return `${days} days ago`;
    };

  return (
    <div className='flex flex-col lg:flex-row gap-8'>
      
      {/* LEFT: POST */}
      <div className='lg:w-[70%] flex flex-col gap-8'>
        
        <h1 className='font-semibold uppercase'>{post.title}</h1>

        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <span>Writen by</span>
          <Link to="/test" className='text-blue-400'>{post.authorEmail}</Link>
          <span>On</span>
          <Link to="/test" className='text-blue-400'>{post.category}</Link>
          <span>{formatTimeAgo(post.createdAt)}</span>
        </div>

        <Images 
          src={post.image} 
          alt="blockforge" 
          className="rounded-2xl w-full object-cover h-150"
          w="600"
        />
        

        <div className='lg:text-lg flex flex-col gap-6 text-justify'>

       <div
          className="lg:text-lg flex flex-col gap-6 text-justify"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        </div>
         <Comments postId={post.id} />
      </div>

      {/* RIGHT: AUTHOR */}
      <div className='lg:w-[30%] sticky top-8 h-max self-start px-4'>
        
        <h1 className='mb-4 text-sm font-medium'>{post.authorEmail}</h1>

        <div className='flex items-center gap-3'>
          <Images 
            src={post.authorImage} 
            alt="blockforge" 
            className="rounded-full w-12 h-12 object-cover" 
            w="48" 
            h="48" 
          />
          <div>
            <Link to="/test" className='text-blue-400'>{post.authorEmail}</Link>
            <p className='text-sm text-gray-400'>A dedicated writer to the core</p>

             <div className='flex gap-4 mt-4'>
            <Link to="https://www.facebook.com/login/" target='blank'>
              <Images src="/facebook.png" alt="twitter" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
            <Link to="https://www.instagram.com/accounts/login/" target='blank'>
              <Images src="/instagram.jpeg" alt="linkedin" className="w-5 h-5 object-cover" w="20" h="20"/>
            </Link>
          </div>
          </div>
        </div>
        <PostMenuActions  onDelete={handleDeletePost}/>
        <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
        <div className='flex flex-col text-sm gap-2'>
          <Link to="/posts" className='underline'>All</Link>
          <Link to="/posts?cat=web-design" className='underline'>Web Design</Link>
          <Link to="/posts?cat=development" className='underline'>Development</Link>
          <Link to="/posts?cat=database" className='underline'>Database</Link>
          <Link to="/posts?cat=search-engine" className='underline'>Search Engine</Link>
        </div>
      </div>
    </div>
    
  )
}

export default SinglePost