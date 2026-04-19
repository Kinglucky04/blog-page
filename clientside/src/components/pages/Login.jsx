import React from 'react'
import { SignIn } from "@clerk/clerk-react";

function Login() {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-120px)]'>
      <SignIn signUpUrl='/register' />
    </div>
  )
}

export default Login
