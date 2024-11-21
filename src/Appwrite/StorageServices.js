import { Client, ID, Storage } from "appwrite"
import Config from "../config/config"

export class StorageService{
    client= new Client()
    storage
    
    constructor(){
        this.client.setEndpoint(Config.appwriteUrl).setProject(Config.appWriteProjectId)
        this.storage= new Storage(this.client)
    }
    async uploadThumbnail(ImageFile){
        // console.log(ImageFile);
        
        try{
            console.log(Config.appWriteBucketId);
            
            const thumbnail_id= await this.storage.createFile(Config.appWriteBucketId,ID.unique(),ImageFile)
            // console.log(thumbnail_id);
            
            return thumbnail_id

        }catch(e){
            console.log(e);
            return false
            
        }
    }
    async deleteFile(thumbnail_id){
        try{
            await this.storage.deleteFile(Config.appWriteBucketId,thumbnail_id)
            return true

        }catch(e){
            console.log(e);
            return false
            
        }
    }
    ThumbnailPreview(thumbnail_id){
        try{
            const file = this.storage.getFilePreview(Config.appWriteBucketId,thumbnail_id)
            return file

        }catch(e){
            console.log(e);
            return false
            
        }
    }
}
const storageServices = new StorageService
export default storageServices;