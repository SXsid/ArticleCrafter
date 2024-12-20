import { Client, Databases, ID, Query } from "appwrite";
import Config from "../config/config";

export class DbService{
    client = new Client()
    database
    
    constructor(){
      
        this.client.setEndpoint(Config.appwriteUrl).setProject(Config.appWriteProjectId)
        this.database = new Databases(this.client)
    }
    async CreatePost({userId,userName,title,content,date,thumbnail_Id}){
       
        
        try{
            const post = await this.database.createDocument(Config.appWriteDatabaseId,Config.appWriteCollectionId,ID.unique(),{
                userId,
                title,
                content,
                date,
                thumbnail_Id,
                userName
            })
            
            
            return post
        }catch(e){
           
            return false
            
        }
    }
    
    async UpdatePost(ArticleId,{title,content,thumbnail_Id}){
        try{
            return await this.database.updateDocument(Config.appWriteDatabaseId,Config.appWriteCollectionId,ArticleId,{
                
                title,
                content,
                thumbnail_Id
            })
        }catch(e){
            
            return false
        }
    }
    async DeletePost(ArticleId){
        try{
            return await this.database.deleteDocument(Config.appWriteDatabaseId,Config.appWriteCollectionId,ArticleId)
        }catch(e){
        
            return false
        }
    }
    async GetPost(ArticleId){
        try{
            const post= await this.database.getDocument(Config.appWriteDatabaseId,Config.appWriteCollectionId,ArticleId)
            return post
        }catch(e){
           
            return false
        }
    }
    async RetriveUsersPosts(userId){
        try{
            return await this.database.listDocuments(Config.appWriteDatabaseId,Config.appWriteCollectionId,Query.equal("userId",[userId]))
        }catch(e){
           
            return false
        }
    }

    async RetriveAllPosts(){
        try{
            return await this.database.listDocuments(Config.appWriteDatabaseId,Config.appWriteCollectionId)
        }catch(e){
          
            
        }
    }
    // async SearchPost(param){
        
    //         try{
    //             return await this.database.listDocuments(Config.appWriteDatabaseId,Config.appWriteCollectionId,Query.search("title",param))
    //         }catch(e){
    //             console.log(e);
                
    //         }
    //     }
    }
    

const dbService= new DbService
export default dbService 