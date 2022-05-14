import { createReducer } from "@reduxjs/toolkit";
import { USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, 
         USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/userConstant";
  


export const userRegisterReducer =  createReducer([], (builder) => {
   builder 
   .addCase(USER_REGISTER_REQUEST,(state, action) => {
      state.push({ loading: true });
   })
   .addCase(USER_REGISTER_SUCCESS,(state, action) => {
      state.push({ loading: false, userInfo: action.payload });
   })
   .addCase(USER_REGISTER_FAIL,(state, action) => {
       state.push({ loading: false, err: action.payload });
   })
   .addDefaultCase((state) => {
     state.push(state);
   })
})

export const userSignInReducer = createReducer([], (builder) => {
    builder
    .addCase(USER_SIGNIN_REQUEST,(state) => {
       state.push({ loading: true });
    })
    .addCase(USER_SIGNIN_SUCCESS,(state, action) => {
       state.push({ loading: false, userInfo: action.payload });
    })
    .addCase(USER_SIGNIN_FAIL,(state, action) => {
       state.push({ loading: false, err: action.payload });
    })
    .addCase(USER_SIGNOUT,(state, action) => {
        state.push({});
    })
    .addDefaultCase((state) => {
        state.push(state);
    })
})

export const userDetailsReducer = createReducer([],(builder) => {
  builder
  .addCase(USER_DETAILS_REQUEST,(state) => {
      state.push({ loading: true });
  })
  .addCase(USER_REGISTER_SUCCESS,(state, action) => {
     state.push({ loading: false, user: action.payload });
  })
  .addCase(USER_DETAILS_FAIL,(state, action) => {
     state.push({ loading: false, err: action.payload });
  })
  .addDefaultCase((state) => {
      state.push(state);
  })
})
