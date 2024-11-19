import React, { useRef } from 'react'
import {CustomInput,Button,MyEditor} from "../index"
import dbService from '../../Appwrite/DbServices'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import storageServices from '../../Appwrite/StorageServices'

function PublishForm({Article}) {
    const navigate=useNavigate()
    const userData=useSelector(state=>state.auth.UserId)
    const today = new Date();
    const todayDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
    const titleRef =useRef()
    const imageRef =useRef()
    
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
        console.log(data);
        
        if(Article){
          try{
            let newImage
            if(data.Image && data.Image[0]){
                newImage=await storageServices.uploadThumbnail(data.Image[0])
                 if(newImage){
                    await storageServices.deleteFile(Article.thumbnail_Id)
                    }
            }
            const newArticle = await dbService.UpdatePost(Article.$id,{
             title:data.title,
             content:data.content,
             thumbnail_Id:newImage?newImage.$id:Article.thumbnail_Id,
 
            })
            if(newArticle){
             navigate(`/post/${newArticle.$id}`)
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
            console.log("start")
           try{
            let imageFile
            if(data.Image && data.Image[0]){
                imageFile= await storageServices.uploadThumbnail(data.Image[0])
            }else{
                throw new Error("plzz upload an image")
            }
            console.log(imageFile,"satrt");
            
            if(imageFile){
                console.log("db start");
                console.log(userData);
                
                console.log({
                    userId:userData.$id,
                    userName:userData.name,
                    title:data.title,
                    content:data.content,
                    thumbnail_Id:imageFile.$id,
                    date:todayDate
                });
                
                
                const newArticle = await dbService.CreatePost({
                    userId:userData.$id,
                    userName:userData.name,
                    title:data.title,
                    content:data.content,
                    thumbnail_Id:imageFile.$id,
                    date:todayDate
                })
                console.log(newArticle);
                
                if(newArticle){
                    navigate(`/post/${newArticle.$id}`)
                }else{
                    console.log("deltet fun");
                    
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
    const buttonClass ="border-2 border-gradient-end rounded-2xl text-xl text-white hover:scale-110 hover:text-gradient-end hover:font-bold w-auto";
  return (
    <div className="flex flex-col items-center mt-10">
      {errors.root &&<div className='text-red-600 text-xl'>{errors.root?.message}</div>}
    <form
      autoComplete="off"
      onSubmit={handleSubmit(ArticleSubmit)}
      className="flex flex-col md:flex-row justify-between w-full max-w-4xl mx-8 md:mx-28 gap-10"
    >
      <div className="flex flex-col w-full md:w-2/3 gap-6">
        <CustomInput
          className="h-12 rounded-xl font-bold outline-none text-2xl px-4 border border-gradient-end focus:border-gradient-start text-white font-inter transition bg-transparent"
          ref={titleRef}
          label="Title"
          placeholder="Title"
        //   value={getValues('title')}
          {...register('title', { required: 'Title is required' })}
        />
        {errors.title && (
          <div className="text-red-500 text-sm">{errors.title.message}</div>
        )}

        <CustomInput
        ref={imageRef}
          className="w-full hover:cursor-pointer text-gradient-end  rounded-lg px-4 py-2 focus:border-blue-500 transition"
          label="Cover Image"
          type="file"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register('Image', {
            required: !Article ? 'Cover Image is required' : false,
          })}
        />
        {errors.Image && (
          <div className="text-red-500 text-sm">{errors.Image.message}</div>
        )}

        <MyEditor control={control} defaultValues={getValues('content')} />
        {errors.content && (
          <div className="text-red-500 text-sm">{errors.content.message}</div>
        )}
      </div>

      <div className="flex mx-10 justify-center md:justify-normal items-center md:items-start gap-4 mt-4 md:mt-10">
        <Button className={`${buttonClass} w-full md:w-auto`} disabled={!isSubmitSuccessful}>
          Preview
        </Button>
        <Button className={`${buttonClass} w-full md:w-auto`} disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Publishing..' : 'Publish'}
        </Button>
      </div>
    </form>
  </div>

  )
}

export default PublishForm
