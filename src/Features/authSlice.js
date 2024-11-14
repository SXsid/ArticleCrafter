import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    UserId:null
}
export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        loggIn:(state,action)=>{
            state.UserId=action.payload.UserId,
            state.isLoggedIn=true
        },
        loggOut:(state)=>{
            state.isLoggedIn=false
            state.UserId=null
        }
    }

})
const AuthReducer =authSlice.reducer
export const {loggIn,loggOut} = authSlice.actions
export default AuthReducer