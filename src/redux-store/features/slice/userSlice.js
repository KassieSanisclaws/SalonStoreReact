import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState ={
  signInAccess: {
    userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null },
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    shippingAddress: localStorage.getItem('shippingAddress') 
          ? JSON.parse( localStorage.getItem('shippingAddress'))
          : {}, 
    },
   userRequestId: "",
   isLoading: "idle",
   isSuccessful: "false",
   isRejected: "false",
   errMessage: "",
}

export const signInAccess = createAsyncThunk(
  "signIn/signInAccess",
   async ({email, password}, thunkAPI) => { 
       await Axios.post(process.env.REACT_APP_AXIOS_SERVER_URLL, {email, password})
        .then((resp) => {       
         console.log(resp)
         localStorage.setItem("userInfo", JSON.stringify(resp));
          })
        .catch((err) => {
         console.log(err.response && err.response.data.message ? err.response.data.message : err.message)
         thunkAPI.rejectWithValue(err.res.data)
      })
}); 

export const registerAccess = createAsyncThunk(
  "register/registerAccess",
  async ({name, email, password }, thunkAPI) => {   
     await Axios.post(process.env.REACT_APP_AXIOS_SERVER_URLR, {name, email, password})
       .then((resp) => {
         localStorage.setItem("userInfo", JSON.stringify(resp));
       })
       .catch((err) => {
          console.log(err.response && err.response.data.message ? err.response.data.message : err.message)
          thunkAPI.rejectWithValue(err.resp.data)
       })
})
// export const signInAccess = createAsyncThunk(
//   "signIn/signInAccess",
//    async ({email, password}, {thunkAPI, dispatch}) => {   
//     dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password}});
//   try {
//    const  data  = await Axios.post(process.env.REACT_APP_AXIOS_SERVER_URL, { 
//        method: "POST", headers:{ Accept: "application/json","Content-Type": "application/json"}}, { email, password }); 
//        console.log(data);
//      dispatch({ type: USER_SIGNIN_SUCCESS, payload: data});
//        localStorage.setItem("login", JSON.stringify({ userLogin: true, token: data.data.accessToken }));
//    }catch(err) {
//        console.log(err)
//     dispatch({ type: USER_SIGNIN_FAIL, payload: err.response && err.response.data.message 
//              ? err.response.data.message : err.message });
//     thunkAPI.rejectWithValue(err.response.data);
//   }}); 

export const userSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
     builder
      .addCase(signInAccess.pending, (state) => {
          if(state.isLoading === "idle")
           {
            
           } 
             state.isLoading = "pending"
          })
      .addCase(signInAccess.fulfilled, (state, action, payload) => {
          console.log("this is the payload data:", payload)
          const { requestId } = action.meta.requestId
             if(state.isLoading === "pending" && state.userRequestId === requestId)
              {                 }
                state.isLoading = "idle";       
                state.isRejected = "false";
                state.isSuccessful = "successful"; 
                state.signInAccess.userInfo = action.payload
          })
      .addCase(signInAccess.rejected, (state, action) => {
               state.isRejected = "true";
               state.isLoading = "failed";
               state.isSuccessful = "false";
               state.errMessage = action.meta.arg;
      })
      
      .addDefaultCase((state) => {
         return state
      })
    }
})

export default userSlice.reducer;