
import React from 'react';
import {

  useColorScheme,
} from 'react-native';
import RootNavigator from './src/navigators/RootNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark'



  return (
      <RootNavigator />
  )
}

export default App
