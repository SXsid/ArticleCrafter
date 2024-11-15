import React from 'react'
import {AuthButton} from "../index"
import { Link, useLocation } from 'react-router-dom'
import Hamburger from '../Hamburger/Hamburger';
import Logo from '../Logo/Logo';
function NavBar() {
    const path = useLocation()
    // console.log(path);
    
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
    <nav className='w-full flex justify-between lg:px-20 px-4  mt-5 items-center '>
      <Logo/>
      <ul className=' hidden lg:flex ml-auto mx-20 gap-8 font-inter text-xl  '>
        {NavItems.map((item,index)=>{
            return(
                <li key={index} className={`${path.pathname===item.path?"underline text-custom-purple":"text-white shadow-sm "} hover:text-custom-purple block`}>
                    <Link to={item.path}>{item.name}</Link>
                </li>
            )
        })}
      </ul>
      <AuthButton/>
      <Hamburger navitem={NavItems}/>
      
    </nav>
  )
}

export default NavBar
