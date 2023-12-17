import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from './NoteSlice'

export default configureStore({
    reducer: {
        notes: NoteReducer
    }
})