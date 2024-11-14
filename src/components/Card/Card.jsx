import React from 'react'
import {NavBar,AuthButton} from "../index"

function Card({children}) {
  return (
    <div className='z-200 shadow-lg rounded-xl w-[300px] h-[250px] bg-[#5d446e5b] backdrop-blur-sm text-custom-purple'>
      hi hter e
      <AuthButton/>
      <NavBar/>
      
    </div>
  )
}

export default Card
