import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    notesData: null,
    error: null
}

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
    const res = await fetch("./data/test.json")
    const data = await res.json()
    return data
})

export const NoteSlices = createSlice({
    name: 'notes',
    initialState,
    extrabuider: (builder) => {
       builder.addCase(fetchNotes.pending, (state) => {
        state.loading = true
       }) 
       builder.addCase(fetchNotes.fulfilled,(state,action) => {
        state.loading = false
        state.notesData = action.payload
        state.error = null
       })
       builder.addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false
        state.notesData = null
        state.error = action.error.message
        // state.error = 'error'

    })
    }
})

export default NoteSlices.reducer