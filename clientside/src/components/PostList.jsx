import React from 'react'
import PostListItem from './PostListItem'
import { useLocation } from "react-router-dom";
import { getData } from "../utils/storage";

function PostList() {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const category = query.get("cat");


    const posts = getData("posts");

    const filteredPosts = category
    ? posts.filter(p => p.category === category)
    : posts;
    
  return (
    <div className='flex flex-col gap-12 mb-8'>
      {filteredPosts.map(post => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
