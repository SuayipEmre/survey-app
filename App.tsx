
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const textColor = {
    color : isDarkMode ? '#fff' : 'red'
  }

  return (
    <>
      <RootNavigator />
    </>
  )
}

export default App
