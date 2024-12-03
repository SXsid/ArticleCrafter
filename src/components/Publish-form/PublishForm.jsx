import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import storageServices from '../../Appwrite/StorageServices'
import PublishComp from './PublishComp'
import { useCreateArticleMutation, useUpdateArticleMutation } from '../../Features/articleSlice'

function PublishForm({Article}) {
    const navigate=useNavigate()
    const userData=useSelector(state=>state.auth.UserId)
    const today = new Date();
    const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    const titleRef =useRef()
    const imageRef =useRef()
    const [createArticle]=useCreateArticleMutation()
    const [updateArticle]=useUpdateArticleMutation()
    
    const {register,handleSubmit,
        formState:{errors,isSubmitting,isSubmitSuccessful},
        setError,control,getValues} = useForm({
            defaultValues:{
                title:Article?.title||"",
                content:Article?.content||"",
                Image:Article?.thumbnail_Id ||"",
            }
        })
    const ArticleSubmit=async(data)=>{
       
        
        if(Article){
          try{
            let newImage
            if(data.Image && data.Image[0]){
                newImage=await storageServices.uploadThumbnail(data.Image[0])
                 if(newImage){
                    await storageServices.deleteFile(Article.thumbnail_Id)
                    }
            }
            const newArticle = await updateArticle({
                id:Article.$id,
                data:{
                    title:data.title,
                    content:data.content,
                    thumbnail_Id:newImage?newImage.$id:Article.thumbnail_Id,
        
                   }
            })
            if(newArticle){
             navigate(`/post/${newArticle.data.$id}`)
            }else{
                if(newImage){
                    await storageServices.deleteFile(newImage.$id)
                }
                throw new Error("Eroor while updating")
            }
          }catch(e){
            setError("root",{message:e.message||"error while updating the aritcle plzz re-publish the changes..."})
          }
        }
        //new article
        else{
            
           try{
            let imageFile
            if(data.Image && data.Image[0]){
                imageFile= await storageServices.uploadThumbnail(data.Image[0])
            }else{
                throw new Error("plzz upload an image")
            }
           
            
            if(imageFile){
                
               
                
                
                const newArticle = await createArticle({
                    userId:userData.$id,
                    userName:userData.name,
                    title:data.title,
                    content:data.content,
                    thumbnail_Id:imageFile.$id,
                    date:todayDate
                })
                
              
               
                if(newArticle){
                    navigate(`/post/${newArticle.data.$id}`)
                }else{
                    
                    
                    await storageServices.deleteFile(imageFile.$id)
                    throw new Error("Error while storing the article")
                }
            }else{
                throw new Error("Error while storing the image")

            }
           }catch(e){
            setError("root",{message:e.message||"Error while uploading Aritcle plzz try again"})
           }
        }
    }
    
 
    return (
     <PublishComp errors={errors} isSubmitSuccessful={isSubmitSuccessful}
     isSubmitting={isSubmitting} getValues={getValues} titleRef={titleRef}
     imageRef={imageRef} ArticleSubmit={ArticleSubmit} handleSubmit={handleSubmit} register={register} Article={Article} control={control}/>
    );
}

export default PublishForm
