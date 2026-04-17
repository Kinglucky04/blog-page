import React from 'react'
import { SignUp } from "@clerk/clerk-react";

function Register() {
  return (
    <div className='flex justify-center items-center '>
      <SignUp signInUrl='/login'/>
    </div>
  )
}

export default Register
