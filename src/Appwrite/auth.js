import {Client,Account, ID} from "appwrite"
import Config from "../config/config"
//we need to use class to we can exprot them as a custom mehtodn rather than dirclty expositn the appwritre funtion

export class AuthService{
    client=new Client()
    account;
    // i wnat both to intialize when an objxt is created 
    constructor(){
        this.client.setEndpoint(Config.appwriteUrl).setProject(Config.appWriteProjectId)
        this.account= new Account(this.client)

    }
    //cusotm fucntion which wil use appwrite under the hood
    async CreateAccount({name,email,password}){
        try{
            const UserAccount= await this.account.create(ID.unique(),name,email,password)
            if(!UserAccount){
                throw new Error
            }else{
                this.Login(email,password)
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
