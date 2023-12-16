import React from "react";
import { View,Pressable,Text,StyleSheet} from "react-native";

const NoteWrapper = (props) => {
    const {type, noteTitle, time_created} = props
    return (
        <Pressable 
            onPress={() => console.log('note')}
            style={[styles.noteWrapper, {backgroundColor: type}]}
        >
            <Text style={styles.noteTitle}>
                {noteTitle}
            </Text>
            <Text style={styles.noteTime}>{time_created}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    noteWrapper: {
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'pink',
        width: '90%',
    },
    noteTitle: {
        fontSize: 20,
        fontWeight: '800',
        paddingBottom: 5
    },
    noteTime: {
        fontWeight: '400'  
    }

})

export default NoteWrapper