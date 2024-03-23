
import React, { useEffect } from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/store/app/store';
import { useColorScheme } from 'react-native';
import { setThemeColor } from './src/store/features/theme/actions';



const App = () => {

  const theme = useColorScheme()
  
  useEffect(() => {
   
    if(theme == 'light' || theme == 'dark'){
      setThemeColor(theme)
    } else{
      setThemeColor('light')
    }
  },[])

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
