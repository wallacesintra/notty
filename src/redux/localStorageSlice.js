import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


const local = [
    {
        id: 1,
        time_created: 'Dec 16, 2023',
        title: "Android development using kotlin",
        body: "Using local storage to store data and redux",
        type: "pink"
    },
    {
        id: 2,
        time_created: 'Dec 16, 2023',
        title: "Artificial Intelligence ",
        body: "Using local storage to store data and redux",
        type: "yellow"
    },
    {
        id: 3,
        time_created: 'Dec 16, 2023',
        title: "Application Passport",
        body: "Using local storage to store data and redux",
        type: "green"
    }
]

const setData = async () => {
    try {
        const jsonValue = JSON.stringify(local)
        await AsyncStorage.setItem('my-key', jsonValue)
    } catch (error) {
        console.log(error)
    }
}

setData()

const getData = async () => {
    try {
        const noteData = await AsyncStorage.getItem('my-key')
        return noteData != null ? JSON.parse(noteData) : null;
    } catch (error) {
        console.log(error) 
    }
}

if (getData() != null)
{
    var LocalData = getData()
}
const initialState = {
    data: LocalData 
}
export const LocalStorageSlice = createSlice({
    name: 'localStorage',
    initialState,
    reducers: {
        fetchLocalNotes: async (state) => {
            state.data = getData()
        },
        setLocalNotes: async () => {
            // await AsyncStorage.setItem('my-key', "async local storage fetching redux")
        }
    }
})

export const { fetchLocalNotes,setLocalNotes } = LocalStorageSlice.actions
export default LocalStorageSlice.reducer