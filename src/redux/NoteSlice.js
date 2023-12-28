import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    loading: false,
    notesData: null,
    error: null
}



export const NoteSlices = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        changeText: (state) => {
            
        }
    }
})

export default NoteSlices.reducer