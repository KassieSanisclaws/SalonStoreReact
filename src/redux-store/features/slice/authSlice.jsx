import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios  from "axios";

const userInfo = JSON.parse(localStorage.getItem("userInfo"));

export const initialState = {
    userInfo:  userInfo ? userInfo : null,
    name: "",
    userRequestID: "",
    accessToken: "",
    isAuthenticated: false,
    isLoading: false,
    isSuccessful: false,
    isRejected: false,
    errMessage: "",
}

// SignInAccess
export const signInAccess = createAsyncThunk("auth/signInAccess", async ({email, password}, thunkAPI) => { 
         await Axios.post(process.env.REACT_APP_AXIOS_SERVER_URLL, {email, password})
          .then((resp) => {       
         return localStorage.setItem("userInfo", JSON.stringify(resp));
            })
          .catch((err) => {
           console.log(err.response && err.response.data.message ? err.response.data.message : err.message)
           thunkAPI.rejectWithValue(err.res.data)
        })
  }); 

// Register 
export const registerAccess = createAsyncThunk("auth/registerAccess", async(userInfo, thunkAPI) => {
  try {
  const { data } =  await Axios.post(process.env.REACT_APP_AXIOS_SERVER_URLR, userInfo) 
  return localStorage.setItem("userInfo", JSON.stringify(data));
  }catch(err){
    console.log(err.response && err.response.data.message ? err.response.data.message : err.message)
  return thunkAPI.rejectWithValue(err.resp.data);
  }
});

// userDetailsID 
export const userIDAccess = createAsyncThunk("auth/userIDAccess", async(thunkAPI) => {
    try {
        
    } catch (err) {
     console.log(err.response && err.response.data.message ? err.response.data.message : err.message)
       return thunkAPI.rejectWithValue(err.resp.data);  
    }
});

export const LogOutUser = createAsyncThunk("auth/logOutUser", () => {
        localStorage.removeItem("userInfo");
        localStorage.removeItem("cartItems");
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset:(state) => {
            state.isLoading = false;
            state.isSuccessful = false;
            state.errMessage = false;
            state.message = "";
        }
    },
    extraReducers:(builder) => {
        builder
     .addCase(registerAccess.pending, (state) => {
         state.isLoading = true;
     })
     .addCase(registerAccess.fulfilled, (state, action) => {
         state.isLoading = false;
         state.isSuccessful = true;
         state.isAuthenticated = true;
         state.isRejected = false;
         state.userInfo = action.meta.arg;
         state.name = action.meta.arg.name;
         state.accessToken = action.meta.arg;
         state.userRequestID = action.meta.requestId;
     })
     .addCase(registerAccess.rejected, (state, action) => {
         state.isLoading = false;
         state.isAuthenticated = false;
         state.userInfo = null;
         state.name = null;
         state.accessToken = null;
         state.userRequestID = null;
         state.errMessage = action.meta;         
     })
     .addCase(signInAccess.pending, (state) => {
         state.isLoading = true;
     })
     .addCase(signInAccess.fulfilled, (state, action) => {
         state.isSuccessful = true;
         state.isLoading = false;
         state.isRejected = false;
         state.isAuthenticated = true;
         state.userInfo = action.meta.arg;
         state.name = action.meta.arg.name;
         state.accessToken = action.meta.arg;
         state.userRequestID = action.meta.arg.requestId;
     })
     .addCase(signInAccess.rejected, (state, action) => {
         state.isLoading = false;
         state.isSuccessful = false;
         state.isAuthenticated = false;
         state.isRejected = true;
         state.userInfo = null;
         state.name = null;
         state.accessToken = null;
         state.userRequestID = null;
         state.errMessage = action.meta.arg;
     })
     .addCase(LogOutUser.fulfilled, (state) => {
            state.userInfo = null;
            state.accessToken = null;
     })
    }
})

export const {reset, setUserState} = authSlice.actions;

export default authSlice.reducer;