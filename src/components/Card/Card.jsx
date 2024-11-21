import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import storageServices from '../../Appwrite/StorageServices'

function Card({$id, thumbnail_Id, title, content, userName, date}) {
  return (
    <Link to={`/post/${$id}`}>
      <motion.div 
        className=' shadow-lg rounded-xl lg:w-[850px] lg:h-[100px] bg-[#5f3d753a] text-custom-purple backdrop-blur-lg w-[300px] mx-2 h-[300px] lg:flex   group overflow-hidden'
        style={{
          backgroundColor: '#5f3d753a', 
        }}
        animate={{
          boxShadow: "0px 0px 10px 10px rgba(183, 148, 244, 0.8)",  
        }}
        transition={{
          duration: 0.4,
          repeat: Infinity,
          ease: "easeInOut", 
          repeatType: 'reverse', 
        }}
      >
        <div id='image' className='p-2 overflow-hidden w-auto'>
          <img 
            alt={title} 
            className='rounded-lg lg:w-[100px] lg:h-[100px] h-[150px] w-[300px]'  
            height={100} 
            src={storageServices.ThumbnailPreview(thumbnail_Id)}
          />
        </div>

       
        <div>
          
        {/* <div className=' hidden mt-2 absolute bg-gradient-start h-10 w-10 rounded-full text-white lg:flex items-center justify-center'>
              <h1 className='text-2xl'>{userName[0]}</h1>
            </div> */}
            <h2 className='  mt-2 mx-2  lg:text-xl text-white font-bold overflow-hidden font-inter'>{title}<span className='text-gradient-end underline lg:text-xl mx-3'>:~<span className='text-xl text-gradient-start'>{userName}</span></span></h2>
         

          
          <div className=' hidden lg:block absolute bottom-2 right-2 text-white text-sm'>
            <div className='text-gradient-end underline '><span className='text-white'>Published on</span>~{date}</div>
          </div>
        </div>
        
      </motion.div>
    </Link>
  )
}

export default Card
