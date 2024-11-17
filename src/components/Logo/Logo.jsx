import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={"/"}>
    <h1 className='text-white font-bold text-3xl font-inter flex'><span className='text-gradient-start'>A</span><span className="hidden lg:block">rticle</span> <span className='text-gradient-start text-4xl'>/</span><span className='lg:text-gradient-start'>C</span><span className="hidden lg:block">rafter</span></h1></Link>
  )
}

export default Logo
