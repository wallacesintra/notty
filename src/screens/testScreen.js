import react, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async () => {
    try {
      await AsyncStorage.setItem('my-key', "use local storage");
    } catch (e) {
      console.log(e)
    }
};

const TestScreen = () => {
    const [value,setValue] = useState(value)

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            console.log(value)
            setValue(value)
            return value
          }
        } catch (e) {
          console.log(e)
        }
    };

    useEffect(() => {
        const readData = async () => {
            await storeData()
            await getData()
        }
        readData()
    }, [])
    return (
        <View>
            <Text>{value}</Text>
        </View>
    )
}

export default TestScreen