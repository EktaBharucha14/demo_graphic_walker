import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import ApiService from "../../../services/api/ApiService";


export const forgotPassword = createAsyncThunk('forgotPassword', async (params) => {
    try {
        const response = await ApiService.post(`/user/forgotPassword`, params);

        return response.data

    } catch (error) {
        // return rejectWithValue(error.data);
    }
});

export const verifyToken = createAsyncThunk('verifyToken', async (params) => {
    try {
        const response = await ApiService.post(`/user/forgotPasswordVerification`, params);

        return response.data

    } catch (error) {
        // return rejectWithValue(error.data);
    }
});

export const resetPassword = createAsyncThunk('resetPassword', async (params) => {
    try {
        const response = await ApiService.patch(`/user/forgotPassword/resetPassword`, params);

        return response.data

    } catch (error) {
        // return rejectWithValue(error.data);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {},
    extraReducers: builder => { }
});

export default authSlice.reducer
