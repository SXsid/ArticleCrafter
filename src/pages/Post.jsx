import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { DotLoader } from '../components'
import dbService from '../Appwrite/DbServices'
import storageServices from '../Appwrite/StorageServices'
import parse from 'html-react-parser'
import { motion, useScroll } from "framer-motion"
import { BorderButton } from './Landing'

function Post() {
    const [article, setArticle] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()
    const { scrollYProgress } = useScroll()
    
    const calculateReadingTime = (content) => {
        const wordsPerMinute = 50;
        const wordCount = content.split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
    }

    useEffect(() => {
        const dataFetch = async () => {
            const post = await dbService.GetPost(id)
            if (post) {
                setArticle(post)
            } else {
                navigate("/")
            }
        }
        dataFetch()
    }, [id, navigate])
   const btnClass= "px-4 lg:px-10 lg:py-2 border-gradient-start py-2 border rounded-xl text-xl font-inter font-bold w-auto"
    return (
        <div className="min-h-screen text-white">
            {article ? (
                <>
                    
                    <motion.div 
                        className="sticky top-0 left-0 right-0 h-1 z-50 bg-gradient-end"
                        style={{
                            scaleX: scrollYProgress,
                            transformOrigin: "left"
                        }}
                    />

                    <div className="relative flex flex-col">
                        <div className='flex justify-between p-8'>
                            <Link to={"/home"}><button className={btnClass}>Go back</button></Link>
                            <Link to={`/article/${id}`}><button className={btnClass} >Edit</button></Link>
                        </div>
                        
                        
                        <motion.div
                            className="relative flex justify-center items-center  mb-10"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <motion.div
                                className="relative transform transition-all hover:scale-105"
                                animate={{
                                    boxShadow: "0px 0px 20px 15px rgba(183, 148, 244, 0.5)"
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <img 
                                    src={storageServices.ThumbnailPreview(article.thumbnail_Id)}
                                    className="max-w-3xl h-[300px] lg:h-[400px] object-cover rounded-xl shadow-lg"
                                    alt="Article Thumbnail"
                                />
                                
                                
                                <motion.div 
                                    className="absolute lg:bottom-4  bottom-0 py-2 right-0 lg:right-4 bg-black/60 text-white lg:px-4 lg:py-2 rounded-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-sm">
                                        {(article.date)} • 
                                        {` ${calculateReadingTime(article.content)} min read`}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        
                        <motion.div 
                            className="mx-8 lg:mx-20 mb-10"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
                        >
                            <h1 className="text-4xl font-extrabold mb-8 text-gradient-start font-inter">
                                {article.title}
                            </h1>

                            <div className="text-lg leading-relaxed font-inter text-gray-200">
                                {parse(article.content)}
                            </div>
                        </motion.div>
                    </div>
                </>
            ) : (
                <div className="flex justify-center items-center h-full">
                    <DotLoader />
                </div>
            )}
        </div>
    )
}

export default Post
