import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { handleErrorMessages } from 'src/@core/utils/common-functions'
import { handleErrorMessages } from '../../../utils/common-functions'

// import ApiService from 'src/services/api/ApiService'
import ApiService from '../../../services/api/ApiService'


export const getGraphicwalkerdataList = createAsyncThunk(
    'graphicwalkerdataList',
    async (params, { rejectWithValue }) => {
        try {
            const response = await ApiService.get("/users/graphicwalkerdata")
            return response.data
        } catch (error) {
            return rejectWithValue(handleErrorMessages(error.data))
        }
    }
)

const graphicWalkerSlice = createSlice({
    name: 'graphicWalker',
    initialState: {
        //userTestList: null,
        userGraphicWalkerDataList: null,
        loading: false
    },
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(getGraphicwalkerdataList.fulfilled, (state, action) => {
                state.userGraphicWalkerDataList = action.payload?.data
                state.loading = false
            })
    }
})

export default graphicWalkerSlice.reducer