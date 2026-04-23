import React from 'react'
import PostListItem from './PostListItem'
import { useLocation } from "react-router-dom";
import { getData } from "../utils/storage";

function PostList() {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const category = query.get("cat");
    const searchQuery = query.get("search") || "";


    const posts = getData("posts") || [];

   let filteredPosts = posts;

// filter by category
    if (category) {
      filteredPosts = filteredPosts.filter(
        (p) => p.category === category
      );
    }

    // filter by search
    if (searchQuery) {
      filteredPosts = filteredPosts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
  return (
      <div className='flex flex-col gap-12 mb-8'>
      {filteredPosts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No posts found
        </div>
      ) : (
        filteredPosts.map(post => (
          <PostListItem key={post.id} post={post} />
        ))
      )}
    </div>
  )
}

export default PostList
