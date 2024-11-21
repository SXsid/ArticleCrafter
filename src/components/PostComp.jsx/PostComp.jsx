import React from 'react'
import parse from 'html-react-parser'
import {motion} from "framer-motion"
import storageServices from '../../Appwrite/StorageServices'
import { DotLoader } from '../index'
import { Link } from 'react-router-dom'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import hljs from 'highlight.js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { htmlToText } from 'html-to-text'

function PostComp({article,btnClass,scrollYProgress,deletetHandler,calculateReadingTime,isAuthor,id}) {
  return (
    <div className='max-w-screen-2xl text-white text-wrap'>
            {article ? (
                <>
                    
                    <motion.div 
                        className=" overflow-hidden sticky top-0 left-0 right-0 h-1 z-50 bg-gradient-end "
                        style={{
                            scaleX:scrollYProgress,
                            transformOrigin: "left"
                        }}
                        initial={{
                            scaleX:0
                        }}
                        
                    />

                    <div className="relative flex flex-col">
                        <div className='flex justify-between p-8'>
                            <Link to={"/home"}><button className={btnClass}>Go back</button></Link>
                           {isAuthor &&
                            <div className='flex gap-2'>
                                <Link to={`/article/${id}`}><button className={btnClass} >Edit</button></Link>
                                <button className={btnClass} onClick={deletetHandler}>Delete</button>
                                </div>}
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
                                    className="lg:max-w-3xl lg:h-[300px]  object-cover rounded-xl shadow-lg"
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
                                        {` ${calculateReadingTime(htmlToText(article.content))} min read`}
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
                            <h1 className="lg:text-4xl text-xl font-extrabold mb-8 text-gradient-start font-inter">
                                {article.title}
                            </h1>

                            <div className="lg:text-lg text-sm leading-relaxed font-inter text-gray-200">
                                {parse(article.content, {
                                    replace: (node) => {
                                        if (node.name === 'code') {
                                            const detectedLanguage = hljs.highlightAuto(node.children[0].data).language;
                                        return (
                                            <SyntaxHighlighter
                                            language={detectedLanguage || 'text'}
                                            style={materialDark}
                                            >
                                            {node.children[0].data}
                                            </SyntaxHighlighter>
                                        );
                                        }
                                    },
                                    })}
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

export default PostComp
