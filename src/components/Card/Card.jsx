import React from 'react'
import { Link } from 'react-router-dom'
import storageServices from '../../Appwrite/StorageServices'

function Card({$id,thumbnail_Id,title,content,userName}) {
  return (
    <Link to={`${$id}`}>
      <div className='z-200 shadow-lg rounded-xl lg:w-[700px] lg:h-[150px] bg-[#5f3d753a]  text-custom-purple  backdrop-blur-lg w-[200px] h-[300px] lg:flex'>
        <div id='image'>
          <img alt={title} src={storageServices.ThumbnailPreview(thumbnail_Id)}/>
        </div>
        <div id='content'>
          <div>
            <div id='main' className='flex gap-4'>
              <div className='h-3 w-3 rounded-full'>{userName[0]}</div>
              <div>{userName}</div>
            </div>
            <h2>{title}</h2>
            <p>{content[40]}</p>
           
          </div>

        </div>
     
      
    </div>
    </Link>
  )
}

export default Card
