import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DotLoader, PublishForm } from '../components'
import dbService from '../Appwrite/DbServices'

function EditPost() {
    const [article,setArticle]=useState(null)
    const navigate =useNavigate()
    const ArticleId=useParams()
    console.log(ArticleId);
    
    useEffect(()=>{
        const dataFetch =async()=>{
            const post = await dbService.GetPost(ArticleId.id)

            if(post){
                setArticle(post)
                console.log(post);
                

            }else{
                    navigate("/")
            }

        }
        dataFetch()
        
    },[ArticleId])
   
    
  return (
    <div>
      {article?<div>
        <PublishForm Article={article}/>
      </div>:<div><DotLoader/></div>}
    </div>
  )
}

export default EditPost
