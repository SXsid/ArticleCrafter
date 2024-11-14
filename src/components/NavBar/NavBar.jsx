import React from 'react'
import {AuthButton} from "../index"
import { Link, useLocation } from 'react-router-dom'
function NavBar() {
    const path = useLocation()
    console.log(path);
    
    const NavItems=[
        {
            name:"Home",
            path:"/"

        },{
             name:"Pubish",
            path:"/publish"
        },{
             name:"Profile",
            path:"/profile"
        }
    ]
  return (
    <nav className='w-full flex justify-between px-20 mt-2 items-center '>
      <h1 className='text-white font-bold text-3xl font-inter'><span className='text-[rgba(190,44,206,0.89)]'>A</span>rticle <span className='text-custom-purple text-4xl'>/</span><span className='text-custom-purple'>C</span>rafter</h1>
      <ul className='flex ml-auto mx-20 gap-8 font-inter text-xl '>
        {NavItems.map((item,index)=>{
            return(
                <li key={index} className={`${path.pathname===item.path?"underline text-custom-purple":"text-white shadow-sm "} hover:text-custom-purple`}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            )
        })}
      </ul>
      <AuthButton/>
      
    </nav>
  )
}

export default NavBar
