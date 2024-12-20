import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dbService from '../Appwrite/DbServices'

import {  useScroll } from "framer-motion"
import { useSelector } from 'react-redux'
import PostComp from '../components/PostComp.jsx/PostComp'
import storageServices from '../Appwrite/StorageServices'
import { useDetleArticleMutation } from '../Features/articleSlice'
import { DotLoader } from '../components'

function Post() {
    const [article, setArticle] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()
    const { scrollYProgress } = useScroll()
    const userData = useSelector(state=>state.auth.UserId)
    const [deleteFile]=useDetleArticleMutation()
    const [loading,setLoading]=useState(false)
    
    
    
    const calculateReadingTime = (content) => {
        // console.log(content);
        
        const wordsPerMinute = 100;
        const wordCount = content.split(/\s+/).length;
        // console.log(wordCount)
        return Math.ceil(wordCount / wordsPerMinute);
    }
    

    useEffect(() => {
        const dataFetch = async () => {
            setLoading(true)
           try{
            const post = await dbService.GetPost(id)
            if (post) {
                setArticle(post)
            } else {
                throw new Error
            }
           }catch(e){
                navigate("/home")
           }finally{
            setLoading(false)
           }
        }
        dataFetch()
    }, [id, navigate])
    
    
    async function deletetHandler(){
        await deleteFile(id)
        await storageServices.deleteFile(article.thumbnail_Id)
        navigate("/home")
    }
    const isAuthor = article && userData.$id===article.userId? true:false
   const btnClass= " border-gradient-start  border rounded-xl text-xl font-inter font-bold w-auto bg-card-background-color w-24 px-4 h-12"
    return (
       <>
        {loading && <DotLoader/>}
        {!loading &&  <PostComp article={article} isAuthor={isAuthor} deletetHandler={deletetHandler}
        calculateReadingTime={calculateReadingTime}btnClass={btnClass} scrollYProgress={scrollYProgress} id={id}/>}
       </>
    )
}

export default Post
