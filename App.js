import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './src/routes/HomeStack';
import Store from './src/redux/Store';
import { Provider } from 'react-redux';



export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Provider store={Store}>
        <HomeStack/>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414'
  },
});
