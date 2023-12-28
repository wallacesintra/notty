import react, { useEffect, useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";
import { fetchLocalNotes,setLocalNotes } from "../redux/localStorageSlice";


// const storeData = async () => {
//     try {
//       await AsyncStorage.setItem('my-key', "use local storage");
//     } catch (e) {
//       console.log(e)
//     }
// };

const TestScreen = () => {
  // const dispatch = useDispatch()

  const {data} = useSelector((state) => state.localStorage)


    // useEffect(() => {
    //   const fetchNotty = async () => {
    //     dispatch(fetchLocalNotes())
    //   }
    //   fetchNotty()
      
    //   console.log(`data ${data}`)
    // }, [])
    console.log(data)
    return (
        <View style={styles.container}>
            <Text>{data._j[0].body}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})
export default TestScreen