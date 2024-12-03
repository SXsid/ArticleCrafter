import { createApi, fakeBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import dbService from "../Appwrite/DbServices";

export const articleSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes:["Articles"],
    endpoints: (builder) => ({
        allArticles: builder.query({
            queryFn: async () => {
                try {
                    const data = await dbService.RetriveAllPosts();
                    return { data: data.documents }; 
                } catch (error) {
                    return { error: { message: error.message || "An error occurred" } };
                }
            },
            providesTags:["Articles"]
        }),

        createArticle:builder.mutation({
            queryFn:async(data)=>{
               try{
                const res = await dbService.CreatePost(data)
                return {data:res}
               }catch(e){
                return false
            }
              
            },
            invalidatesTags:["Articles"]
        }),
        updateArticle:builder.mutation({
            queryFn:async({id,data})=>{
                try{
                    const res = await dbService.UpdatePost(id,data)
                    return {data:res}
                   }catch(e){
                    return false
                }
            },
            invalidatesTags:["Articles"]
        }),
        
        
        detleArticle:builder.mutation({
            queryFn:async(id)=>{
               try{
                
                await dbService.DeletePost(id)
                return {data:id}
               }catch(e){
                return false
               }
            },
            invalidatesTags:["Articles"]
        })
    
    
    }),
});

export const { 
    useAllArticlesQuery,
    useCreateArticleMutation ,
    useUpdateArticleMutation,
    useDetleArticleMutation} = articleSlice;
export default articleSlice;
