import {Client,Account, ID} from "appwrite"
import Config from "../config/config"

export class AuthService{
    client=new Client()
    account;
    
    constructor(){
        this.client.setEndpoint(Config.appwriteUrl).setProject(Config.appWriteProjectId)
        this.account= new Account(this.client)

    }
   
    async CreateAccount({name,email,password}){
       
        
        try{
            const UserAccount= await this.account.create(ID.unique(),email,password,name)
            
            
            if(!UserAccount){
                throw new Error("Account creation failed. Please try again.")
            }else{
               try{
                const session= await this.Login({email,password})
                return session
               }catch(e){
                throw new Error("Sign-in failed after account creation. Please try logging in manually.")
               }
              
               
               
               
               
            }
        }catch(e){
            throw e
        }
    }

    async Login({email,password}){
        try{
            const logValue= await this.account.createEmailPasswordSession(email,password)
            return logValue
        }catch(e){
            
           
                throw e
        }
    }
    async LogOut(){
        try{
            await this.account.deleteSessions()
        }catch(e){
            throw e
        }
    }
    async GetUser(){
        
        try{
            const User= await this.account.get()
            return User
        }catch(e){
            throw e
        }
        
    }
}
export const authService = new AuthService()
