import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const sendForm = createAsyncThunk('contactSlice/sendForm', async ({ nama, email, message }) => {
   
    const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: nama,
            email: email,
            message: message
        })
    }

    const result = await fetch('https://apibob.herokuapp.com/api/send-email', reqOptions)
        .then(res => res.json())
    return result;
})

const initialState = {
    status: null
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

