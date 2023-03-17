import React from 'react'
import { View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
   
  )
}

export default App
