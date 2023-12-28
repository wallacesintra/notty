import { configureStore } from '@reduxjs/toolkit'
import NoteReducer from './NoteSlice'
import LocalNotesReducer from './localStorageSlice'

export default configureStore({
    reducer: {
        notes: NoteReducer,
        localStorage: LocalNotesReducer
    }
})