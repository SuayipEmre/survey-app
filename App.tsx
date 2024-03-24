
import React, { useEffect } from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/store/app/store';
import { useColorScheme } from 'react-native';
import { setThemeColor } from './src/store/features/theme/actions';
import { getLanguagePreference } from './src/utils/getLanguagePreferenceFromStorage';
import i18 from './src/Services/i18next'


const App = () => {

  const theme = useColorScheme()
  
  useEffect(() => {
   

    if(theme == 'light' || theme == 'dark'){
      setThemeColor(theme)
    } else{
      setThemeColor('light')
    }

    const getUsersLanguage = async() => {
      const language = await getLanguagePreference()

      if(language){
        i18.changeLanguage(language)
      }
      
    }
    getUsersLanguage()

  },[])

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
