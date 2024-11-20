import React from 'react'
import {motion} from "framer-motion"
import {CustomInput,Button,MyEditor} from "../index"
function PublishComp({errors,isSubmitting,isSubmitSuccessful,ArticleSubmit,handleSubmit,register,imageRef,titleRef,getValues,Article,control}) {
  return (
    <div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-8 px-4 bg-transparent"
      >
        <div className="max-w-7xl mx-auto">
          {errors.root && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500 rounded-xl mx-4"
            >
              <p className="text-red-500 text-center font-medium">
                {errors.root?.message}
              </p>
            </motion.div>
          )}
  
          <div className="bg-[#a489cb15] backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <form
                autoComplete="off"
                onSubmit={handleSubmit(ArticleSubmit)}
                className="space-y-8"
              >
                <div className="grid lg:grid-cols-4 gap-8">
                  
                  <div className="lg:col-span-3 space-y-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <CustomInput
                        className="w-full h-14 rounded-xl text-2xl px-6 bg-card-background-color border-2 border-gradient-end focus:border-gradient-start text-white font-medium placeholder-gray-400 transition-all duration-300 "
                        ref={titleRef}
                        label={
                          <span className="text-gray-200 font-medium ml-1 mb-2 block">
                            Article Title
                          </span>
                        }
                        placeholder="Enter your article title..."
                        {...register('title', { required: 'Title is required' })}
                      />
                      {errors.title && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm mt-2 ml-1"
                        >
                          {errors.title.message}
                        </motion.p>
                      )}
                    </motion.div>
  
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="block text-gray-200 font-medium ml-1 mb-2">
                        Cover Image
                      </label>
                      <div className="relative group">
                        <input
                          ref={imageRef}
                          type="file"
                          className="hidden"
                          accept="image/png, image/jpg, image/jpeg, image/gif"
                          {...register('Image', {
                            required: !Article ? 'Cover Image is required' : false,
                          })}
                          id="cover-image"
                        />
                        <label
                          htmlFor="cover-image"
                          className="flex flex-col items-center justify-center w-full h-20 rounded-xl border-2 border-dashed border-gray-600 bg-card-background-color cursor-pointer transition-all duration-300 hover:bg-gray-700/50 hover:text-gradient-start hover:border-gray-500 group"
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="text-center px-4"
                          >
                            <div className='flex my-3 gap-8'>
                            <div className="mx-auto flex justify-center mt-3">
                              <svg className="w-12 h-12 text-gray-400 *:group-hover:text-gradient-start" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className=''>
                            <p className="text-base text-gray-300 font-medium group-hover:text-white">
                              Drop your image here
                            </p>
                            <p className="mt-1 text-sm text-gray-400 group-hover:text-white">
                              or click to browse files
                            </p>
                            <p className="mt-2 text-xs text-gray-500 ">
                              PNG, JPG, JPEG, GIF (Max 10MB)
                            </p>
                            </div>
                            </div>
                          </motion.div>
                        </label>
                      </div>
                      {errors.Image && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm mt-2 ml-1"
                        >
                          {errors.Image.message}
                        </motion.p>
                      )}
                    </motion.div>
  
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="prose prose-invert max-w-none"
                    >
                      <MyEditor
                        control={control}
                        defaultValues="hi there "
                      />
                      {errors.content && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-red-400 text-sm mt-2 ml-1"
                        >
                          {errors.content.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
  
                  
                  <div className="lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="sticky top-6 space-y-4"
                    >
                      <button
                        type="button"
                        disabled={!isSubmitSuccessful}
                        className="w-full p-4 bg-gray-800 text-white rounded-xl transition-all duration-300 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        <span className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Preview
                        </span>
                      </button>
  
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-4 bg-gradient-start text-white border-2 border-gradient-end hover:text-gradient-start rounded-xl transition-all duration-300 hover:bg-card-background-color disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden hover:scale-110"
                      >
                        {isSubmitting ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center justify-center"
                          >
                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Publishing...
                          </motion.div>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                            Publish
                          </span>
                        )}
                      </button>
                    </motion.div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PublishComp
