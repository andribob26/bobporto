import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import gallerySlice from './slices/gallerySlice'
import contactSlice from './slices/contactSlice'

const reducer = combineReducers({
    gallerySlice,
    contactSlice
})

const store = configureStore({
    reducer
})

export default store
