import react from "react";
import {createStackNavigator } from '@react-navigation/stack'
import Home from "../screens/Home";
import Note from "../screens/Note";

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
        
        >
            <Stack.Screen
                name = "Home"
                component={Home}
                options={{ 
                    headerShown: false
                }} 
            />
            <Stack.Screen
                name = "Note"
                component={Note}
                options={{ 
                    headerShown: false
                }} 
            />            
        </Stack.Navigator>
    )
}

export default HomeStack