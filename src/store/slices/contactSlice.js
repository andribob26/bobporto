import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sendForm = createAsyncThunk('contactSlice/sendForm', async ({ nama, email, message }) => {


    const result = await axios.post('https://apibob.herokuapp.com/api/send-email', {
        name: nama,
        email: email,
        message: message
    })
    return result.data;
})

const initialState = {
    status: ''
}


const contactSlice = createSlice({
    name: "contactSlice",
    initialState,
    extraReducers: {
        [sendForm.pending]: (state) => {
            state.status = 'Pending'
        },

        [sendForm.fulfilled]: (state, action) => {

            state.status = 'Fulfilled'
        },

        [sendForm.rejected]: (state) => {
            state.status = 'Rejected'
        }
    }
})

export default contactSlice.reducer

