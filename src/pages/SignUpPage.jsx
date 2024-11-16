import React from 'react'
import { NavBar, SignUp } from '../components/index'

function SignUpPage() {
  return (
    <div>
      <NavBar/>
      <div className='flex justify-center items-center h-screen '>
      <SignUp/>
      </div>
    
    </div>
  )
}

export default SignUpPage
