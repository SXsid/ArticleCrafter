import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorComp() {
    const navigate=useNavigate()
  return (
    <div className='flex gap-2 justify-center items-center h-screen text-3xl'>
      <h1 className='text-white'>Wrong Page sir plzz</h1><button className='text-custom-purple underline' onClick={()=>navigate("/")}>GO Back</button>
    </div>
  )
}
