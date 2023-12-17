import React,{useEffect} from "react";
import { View,Text,StyleSheet,SafeAreaView,StatusBar,Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import NoteWrapper from "../components/noteWrapper";
import { useSelector, useDispatch } from "react-redux";
import { fetchNotes } from "../redux/NoteSlice";

const Home = (props) => {
    const {navigation} = props
    const dispatch = useDispatch()

    const { notesData, error } = useSelector((state) => state.notes)

    useEffect(() => {
        dispatch(fetchNotes())
        console.log(`note - ${notesData}`)
    },[])


    // console.log(notesData)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Notes</Text>
                <Pressable style={styles.searchWrapper}>
                    <FontAwesome name="search" size={30} color="white" />
                </Pressable>
            </View>
            <View style={styles.notesContainer}>
                <NoteWrapper
                    goTo = {() => navigation.navigate('Note')}
                    noteTitle = {"How to make your personal brand stand out online"}
                    time_created = {"Dec 16, 2023"}
                    type = {'pink'}
                />
                <NoteWrapper
                    goTo = {() => navigation.navigate('Note')}
                    noteTitle = {"How to make your personal brand stand out online"}
                    time_created = {"Dec 16, 2023"}
                    type = {'yellow'}
                />
                <NoteWrapper
                    goTo = {() => navigation.navigate('Note')}
                    noteTitle = {"How to make your personal brand stand out online"}
                    time_created = {"Dec 16, 2023"}
                    type = {'green'}
                />                                
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        // marginTop: StatusBar.currentHeight || 0,
        flex: 1,
    },
    titleContainer: {
        margin: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 34,
    },
    searchWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 40,
        height: 40,
        backgroundColor: '#393939'
    },
    notesContainer: {

    },
    
})
export default Home