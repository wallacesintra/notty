import 'react-native-gesture-handler';
import Realm from 'realm';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/routes/HomeStack';
import Store from './src/redux/Store';
import { Provider } from 'react-redux';
import Home from './src/screens/Home';
import TestRealm from './src/screens/testRealm';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Provider store={Store}>
        <HomeStack/>
      </Provider>
      {/* <TestRealm/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414'
  },
});
