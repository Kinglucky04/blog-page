import { useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import PostListPage from './components/pages/PostListPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Write from './components/pages/Write';
import SinglePost from './components/pages/SinglePost';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";


function App() {
  

  return (
    <>  
    <div className='px-24 md:px-28 py-6'>
{/* 
        <SignedOut>
        <Login />
      </SignedOut> */}

      <Navbar />

         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/write" element={<Write />} />
          <Route path="/single-post" element={<SinglePost />} />
          <Route path="/post-list-page" element={<PostListPage />} />
        </Routes>
    </div>  
    </>
  )
}

export default App
