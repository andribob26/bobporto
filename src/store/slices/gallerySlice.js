import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllGallery = createAsyncThunk('gallerySlice/getAllGallery', async () => {
    const result = await fetch('https://apibob.herokuapp.com/api/get-all-gallery').then(res => res.json());
    return result
})



const initialState = {
    status: null,
    galleryData: []
}

const gallerySlice = createSlice({
    name: "gallerySlice",
    initialState,
    extraReducers: {
        [getAllGallery.pending]: (state) => {
            state.status = 'Pending';
        },

        [getAllGallery.fulfilled]: (state, action) => {
            state.status = 'Fulfilled';
            state.galleryData = action.payload;
        },

        [getAllGallery.rejected]: (state) => {
            state.status = 'Rejected';
        }
    }
})

export default gallerySlice.reducer