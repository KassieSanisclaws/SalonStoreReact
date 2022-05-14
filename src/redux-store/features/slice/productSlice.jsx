import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isLoading: true,
    err: false
}

export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {}
});


export default productsSlice.reducer;