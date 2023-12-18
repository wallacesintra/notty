import React,{useState} from "react";
import { SafeAreaView,View,TextInput,StyleSheet, StatusBar,Pressable,Text} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



const Note = (props) => {
    const {navigation} = props
    const [editable, setEditable] = useState(true)

    const edibility = () => {
        setEditable(true? false : true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Pressable
                    onPress={() => navigation.navigate('Home')} 
                    style={styles.btn}
                >
                    <Ionicons name="arrow-back" size={30} color="white" />
                </Pressable>

                <Pressable style={styles.btn}
                    onPress={() => console.log('edit')}
                >
                    <AntDesign name="edit" size={30} color="white" />
                </Pressable>
            </View>
            <View style={styles.noteEditor}>
                <TextInput
                    style={[styles.txtInput, {fontSize: 25, fontWeight: 'bold'}]}
                    maxLength={60}
                    multiline={true}
                    placeholder="Title"
                    placeholderTextColor={'white'}
                    cursorColor={'white'}

                />
                <Text style={styles.noteTime}>May 20, 2023</Text>
                <TextInput
                    style={[styles.txtInput, {fontSize: 20, fontWeight: 'normal', color: 'gray'}]}
                    cursorColor={'white'}
                    placeholderTextColor={'white'}
                    placeholder="Note..."
                    multiline = {true}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#141414',
        paddingTop: StatusBar.currentHeight || 0,
        flex: 1,
    },
    titleContainer: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#393939'
    },
    noteEditor: {
        margin: 10
    },
    txtInput: {
        color: 'white',
        marginTop: 10,
        marginBottom: 10,
    },
    noteTime: {
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
    }

    
})
export default Note